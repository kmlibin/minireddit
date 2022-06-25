import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

//actions
import { setComments, resetCommentState } from '../Slices/commentsSlice'

export const useSetComments = (url) => {
  const [loading, setIsLoading] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(resetCommentState())
        const fetchComments = async (url) => {
            
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
            
            } catch (error) {
                console.error(error);
                setIsLoading(false)
               
            }
        }
        fetchComments()
    }, [url])
return {loading}
}




