import { useState, useEffect } from 'react';

//styles
import './Feed.css'

export default function Feed() {
    const [feed, setFeed] = useState([])
    const [media, setMedia] = useState('')

    const getData = async () => {
        try {
            const response = await fetch('https://www.reddit.com/r/popular.json');

            if (response.status === 200) {
                const jsonResponse = await response.json();
                // console.log(jsonResponse.data.children)
                setFeed(jsonResponse.data.children)
                console.log(feed)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    });

    return (
        <div className="feed-container">
            {feed.map(item => (
                <div key={item.data.id}>
                    <p>{item.data.title}</p>
                    <img src={item.data.thumbnail} />
                    <p>{item.data.author}</p>
                    <p>{item.data.num_comments}</p>
                </div>
            ))}
        </div>
    )
}
