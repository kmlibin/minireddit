import { useSetData } from '../../Hooks/useSetData'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//actions 
import { selectPosts } from '../../Slices/dataSlice'

//styles
import './Home.css'

//components
import FeedCard from "../../Components/Feed/FeedCard"
import Spinner from '../../Components/Spinner/Spinner'


//url for home page
const homeURL = 'https://www.reddit.com/r/popular.json'

export default function Home() {
    const { loading, error } = useSetData(homeURL)
    const posts = useSelector(selectPosts)
    const navigate = useNavigate()


    return (
        <div className="feed-container">
            {loading && <Spinner />}
            {error &&
                <div className="error">
                    <p> Oops! Something went wrong.</p>
                    <button className="btn" onclick={() => navigate('/')}>Return Home</button>
                </div>}
            {posts.map(post => (
                <FeedCard
                    key={post.id}
                    upVotes={post.upVotes}
                    timeStamp={post.timeStamp}
                    image={post.image}
                    title={post.title}
                    media={post.media}
                    text={post.text}
                    author={post.author}
                    comments={post.comments}
                    permalink={post.permalink}
                />
            ))}
        </div>
    )
}
