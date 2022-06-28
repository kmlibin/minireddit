import { NavLink } from "react-router-dom"
import { FaReddit } from 'react-icons/fa'

//styles
import './SingleSR.css'

export default function SingleSR({ setToggle, setIsOpen, icon, name, loading }) {
  

  return (

    <div className="card">
        <NavLink to={`/subreddit/${name}`} onClick={() => {setToggle(false) ; setIsOpen(false)}} disabled={loading}>
          {icon ? <img src={icon} /> : <FaReddit /> }
          <p>r/ {name}</p>
        </NavLink>
    </div>

  )
}
{/* <img src='/redditlogo.svg' /> */}