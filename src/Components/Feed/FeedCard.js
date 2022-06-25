import { useState } from 'react'

//time formatting
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

//components
import CommentFeed from '../Comments/CommentFeed'

//icons
import { FaCommentAlt, FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa'

//styles
import './FeedCard.css'


export default function FeedCard({ permalink, timeStamp, media, image, title, author, comments, text, upVotes }) {
    const [toggle, setToggle] = useState(false);
    
//toggle for comments
    const handleClick = () => {
        setToggle( !toggle )
    }

  return (

    <div className="feed-card">
      <div className="ups">
        <FaArrowCircleUp className="up-arrow" />
        <p>{upVotes}</p>
        <FaArrowCircleDown className="down-arrow" />
      </div>

      <div className="info">
        <h2>{title.replace("&amp;", "")}</h2>
        {text.includes('www') ? null : <p>{text}</p>}
        {/* if it's a video, the page displays a sad blank image. I haven't figured out videos, 
                  so this way I check so you at least don't see anything. */}
        {media === null ? <img src={image} /> : null}

        <div className="bottom-card">
          <li>{author}</li>
          <li className="italics">{formatDistanceToNow(new Date(timeStamp * 1000), 20220621, { addSuffix: true })} ago</li>
          <li><FaCommentAlt className="message-icon" onClick={handleClick}/> {comments}</li>
        </div>
      </div>
      {toggle && <CommentFeed permalink={permalink} />}
    </div>
  )
}
