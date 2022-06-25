import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//actions
import { setData, resetState } from '../Slices/dataSlice';


export const useSetData = (url) => {
    const [loading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetState())
        const postData = async () => {
            setIsLoading(true)

            try {
                //send fetch to api
                const response = await fetch(url);

                if (response.status === 200) {
                    const jsonResponse = await response.json();
                    //check response
                    console.log(jsonResponse)
                    const newData = jsonResponse.data.children

                    //create new object to be stored in Redux and dispatch to store

                    newData.forEach((item) => {
                        dispatch(setData({
                            id: item.data.id,
                            title: item.data.title,
                            author: item.data.author,
                            comments: item.data.num_comments,
                            subreddit: item.data.subreddit_name_prefixed,
                            permalink: item.data.permalink.slice(0, -1),
                            text: item.data.selftext,
                            media: item.data.media,
                            ups: item.data.score,
                            timeStamp: item.data.created_utc,
                            img: (typeof (item.data.preview) !== 'undefined') ? item.data.preview.images[0].source.url.replace("amp;", "") : null

                        }))

                    })
                    setIsLoading(false)
                    setError(false)
                }

            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        postData()
    }, [url])
    return { loading, error }
}
