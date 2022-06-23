import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useSetData } from '../../Hooks/useSetData'

//selectors
import { selectPosts } from '../../Slices/dataSlice'

//components
import FeedCard from "../../Components/Feed/FeedCard"
import Spinner from '../../Components/Spinner/Spinner'


export default function SubReddit() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { name } = useParams()
    const posts = useSelector(selectPosts)

    //create url from params hook & pass to hook
    let url = 'https://www.reddit.com/r/' + name + '.json'
    const { loading, error } = useSetData(url)
    return (
        <div className= "feed-container">
            {loading && <Spinner />}
            {error && 
                <div className="error">
                <p> Oops! Something went wrong.</p>
                <button className ="btn" onclick = {() => navigate('/')}>Return Home</button>
                </div>}
            {posts.map(post => (
                <FeedCard
                    key={post.id}
                    upVotes={post.upVotes}
                    image={post.image}
                    title={post.title}
                    media={post.media}
                    text={post.text}
                    author={post.author}
                    timeStamp={post.timeStamp}
                    comments={post.comments}
                    
                />
                
            ))
            
            }
        </div>
    )
}
