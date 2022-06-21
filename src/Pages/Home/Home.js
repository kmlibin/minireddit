import { useSetData } from '../../Hooks/useSetData'
import { useSelector } from 'react-redux'

//actions 
import { selectPosts } from '../../Slices/dataSlice'

//styles
import './Home.css'

//components
import FeedCard from "../Feed/FeedCard"

//url for home page
const homeURL = 'https://www.reddit.com/r/popular.json'

export default function Home() {
    const { loading, error } = useSetData(homeURL)
    const posts = useSelector(selectPosts)

    return (
        <div className="container">

            {posts.map(post => (
                <FeedCard
                    key={post.id}
                    timeStamp={post.timeStamp}
                    image={post.image}
                    title={post.title}
                    url={post.url}
                    media={post.media}
                    text={post.text}
                    author={post.author}
                    comments={post.comments}
                />
            ))}
        </div>
    )
}
