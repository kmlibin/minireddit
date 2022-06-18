import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

//components
import FeedCard from './FeedCard';

//selectors
import { selectPosts } from '../../Slices/dataSlice';

//actions
import { setData } from '../../Slices/dataSlice';

//styles
import './Feed.css'


export default function Feed() {
    const [loading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)

    //fetch data -- should I put in a hook? tbd
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)

            try {
                const response = await fetch('https://www.reddit.com/r/popular.json');

                if (response.status === 200) {
                    const jsonResponse = await response.json();

                    console.log(jsonResponse)
                    const newData = jsonResponse.data.children

                    //create new object to be stored in Redux and dispatch to store

                    newData.map((item) => {
                        dispatch(setData({
                            id: item.data.id,
                            title: item.data.title,
                            author: item.data.author,
                            comments: item.data.num_comments,
                            subreddit: item.data.subreddit_name_prefixed,
                            url: item.data.url,
                            text: item.data.selftext,
                            media: item.data.media,
                            img: (typeof (item.data.preview) !== 'undefined') ? item.data.preview.images[0].source.url.replace("amp;", "") : null

                        }))

                    })

                    setIsLoading(false)
                }

            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        getData()
    }, [])


    return (
        <div className="feed-container">
            {posts.map(post => (
                <FeedCard key={post.id} image={post.image} title={post.title} url={post.url} media={post.media} text={post.text} author={post.author} comments={post.comments} />
            ))}
        </div>
    )
}
