import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSetData } from '../../Hooks/useSetData'

//selectors
import { selectPosts } from '../../Slices/dataSlice'

//components
import FeedCard from "../Feed/FeedCard"


export default function SubReddit() {
    const dispatch = useDispatch()

    const { name } = useParams()
    const posts = useSelector(selectPosts)

    //create url from params hook & pass to hook
    let url = 'https://www.reddit.com/r/' + name + '.json'
    const { loading, error } = useSetData(url)

    return (
        <div className={loading ? "loading-wheel" : "feed-container"}>
            {error && <p className="error">Oops! Something went wrong. Message: {error}</p>}
            {posts.map(post => (
                <FeedCard
                    key={post.id}
                    image={post.image}
                    title={post.title}
                    url={post.url}
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
