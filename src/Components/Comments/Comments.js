import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//actions
import { setComments } from '../../Slices/commentsSlice'

//selectors 
import { selectPosts } from '../../Slices/dataSlice'


export default function Comments() {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
//need to hook up somehow

    const permalink = posts.permalink
    const url = `https://www.reddit.com${permalink}.json`
    console.log(url)

    useEffect(() => {
        const fetchComments = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url);
                if (response.status === 200) {
                    const jsonResponse = await response.json();
                    //previous attempts at accessing response data, I hadn't jumped down a level - worked with map method
                    const comments = jsonResponse[1].data.children.map(comment => comment.data);
                    comments.pop();
                    // console.log(comments)

                    comments.forEach((comment) => {
                        dispatch(setComments({
                            time: comment.created_utc,
                            author: comment.author,
                            text: comment.body
                        }))

                    })

                }
                setIsLoading(false)
            } catch (error) {
                console.error(error);
                setIsLoading(false)
            }
        }
        fetchComments()
    }, [url])


    return (
        <div>output</div>
    )
}




