import { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSetComments } from '../../Hooks/useSetComments'

//components
import CommentFeed from './CommentFeed'

//actions
import { setComments, resetCommentState } from '../../Slices/commentsSlice'

//selectors 
import { selectComment } from '../../Slices/commentsSlice'


export default function Comments() {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const comments = useSelector(selectComment)
    const {link} = useSelector(state=>state.data)

   let newUrl = link
  
  
    // const permalink = posts.permalink
    // const url = "https://www.reddit.com/r/news/comments/viygi9/supreme_court_rules_against_new_yorks_gun_permit"


        
        const fetchComments = async () => {
           dispatch(resetCommentState())
            setIsLoading(true)
            try {
                const response = await fetch(newUrl);
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
     

 useEffect(() => {
    fetchComments()
 }, [newUrl])

//updated link, got comments, now need to map through to display.
    return (
        <div className="comments-container">
        {comments.map(comment => (
              <li>{comment.author}</li>
            ))
            }
      </div>
    )
}
