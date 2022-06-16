import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

//functions
import { setData } from '../../Slices/dataSlice';

//styles
import './Feed.css'

export default function Feed() {
   const dispatch = useDispatch()

    const test = useSelector(state => state.data.slice(-1))
    
    const getData = async () => {
        try {
            const response = await fetch('https://www.reddit.com/r/popular.json');

            if (response.status === 200) {
                const jsonResponse = await response.json();
                const newData = jsonResponse.data.children

                //create new object to be stored in Redux

                let newObjects = []
                newData.forEach(item => {
                    newObjects.push({
                        id: item.data.id,
                        title: item.data.title,
                        thumbnail: item.data.thumbnail,
                        author: item.data.author,
                        comments: item.data.num_comments 
                    })
                })
                //dispatch action to store
                dispatch(setData(newObjects))
                console.log(test[0][0])
                
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
           <p>feedgoeshere</p>
        </div>
    )
}
