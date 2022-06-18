import { Link } from "react-router-dom"

//styles
import './SingleSR.css'

export default function SingleSR({icon, url, name}) {
  return (
    <div className = "card">
                {icon ? <img src={icon} /> : <img src='./redditlogo.svg'/>}
                <p>{name}</p>
                <Link to = {url} />      
    </div>
  )
}
