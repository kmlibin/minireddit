import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import SingleSR from './SingleSR'

//actions
import { setSubReddit } from '../../Slices/subRedditSlice'

//selectors 
import { selectSR } from '../../Slices/subRedditSlice'

//react icons
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

//styles
import './SideBar.css'

export default function SideBar() {
  const [toggle, setToggle] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isLoading, setIsLoading] = useState(false)
  const [open, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  const subReddit = useSelector(selectSR)

  const url = 'https://www.reddit.com/subreddits.json'

  //toggle for responsive navbar
  const toggleNav = () => {
    setToggle(!toggle)
    setIsOpen(!open)
    console.log('worked')
  }


  //fetch data for subreddit list
  useEffect(() => {

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

  //checks every time the window shrinks or gets larger so it knows which nav to display
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    //cleanup function if component unmounts
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <div className="sidebar-container">
      <h3>SubReddits</h3>
      <button className="btn" onClick={toggleNav}>{open ? <FaAngleUp /> : <FaAngleDown />}</button>
      {(toggle || screenWidth > 700) && (
        <>
          {subReddit.map(sub => (
            //split logic from component
            <SingleSR setToggle={setToggle} setIsOpen={setIsOpen} screen={screenWidth} icon={sub.icon} key={sub.id} name={sub.displayName} />
          ))}
        </>)}

    </div>
  )
}



