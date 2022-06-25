import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import SingleSR from './SingleSR'

//actions
import { setSubReddit } from '../../Slices/subRedditSlice'

//selectors 
import { selectSR } from '../../Slices/subRedditSlice'

//styles
import './SideBar.css'

export default function SideBar() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const subReddit = useSelector(selectSR)

  const url = 'https://www.reddit.com/subreddits.json'

  useEffect(() => {
    //fetch data
    const getSubReddit = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const jsonResponse = await response.json();
          const srData = jsonResponse.data.children
          //console.log(jsonResponse)
          //create new object for store and dispatch
          srData.map((item) => {
            dispatch(setSubReddit({
              icon: item.data.icon_img,
              url: item.data.url,
              displayName: item.data.display_name,
              id: item.data.id
            }))
          })
          setIsLoading(false)

        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getSubReddit()

  }, [])


  return (
    <div className="sidebar-container">
      <h3>SubReddits</h3>
      {subReddit.map(sub => (
        //split logic from component
        <SingleSR icon={sub.icon} key={sub.id} name={sub.displayName} />
      ))}

    </div>
  )
}
