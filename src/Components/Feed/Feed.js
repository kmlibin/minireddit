import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { selectPosts } from '../../Slices/dataSlice';

//actions
import { setData } from '../../Slices/dataSlice';

//styles
import './Feed.css'

export default function Feed() {
    const [fetching, setIsFetching] = useState(false)

    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)

    //fetch data -- should I put in a hook? tbd

    useEffect(() => {
        const getData = async () => {
            setIsFetching(true)

            try {
                const response = await fetch('https://www.reddit.com/r/popular.json');

                if (response.status === 200 || fetching === true) {
                    const jsonResponse = await response.json();
                    const newData = jsonResponse.data.children

                    //create new object to be stored in Redux and dispatch to store

                    newData.map((item) => {
                        dispatch(setData({
                            id: item.data.id,
                            title: item.data.title,
                            thumbnail: item.data.thumbnail,
                            author: item.data.author,
                            comments: item.data.num_comments
                        }))

                    })
                    //unmount
                    setIsFetching(false)
                }

            } catch (error) {
                console.log(error)
                setIsFetching(false)
            }
        }
        getData()
    }, [])


    return (
        <div className="feed-container">

            {posts.map(item => (
                <p>{item.id}</p>))}
        </div>
    )
}
