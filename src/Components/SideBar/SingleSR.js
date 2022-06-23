import { NavLink } from "react-router-dom"


//styles
import './SingleSR.css'

export default function SingleSR({icon, name, loading}) {

  return (
   <div className = "card"> 
              <NavLink  to ={`/subreddit/${name}`} disabled={loading}> 
                {icon ? <img src={icon} /> : <img src='/redditlogo.svg'/>}
                <p>r/ {name}</p>
              </NavLink>
                    
    </div>
  )
}
