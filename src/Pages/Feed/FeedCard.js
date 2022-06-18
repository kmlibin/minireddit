//styles
import './FeedCard.css'

export default function FeedCard({ media, image, title, author, comments, text, url}) {
  
  return (
    <div className="feedCard">
      <h2><a href = {url}>{title}</a></h2>
{/* if it's a video, the page displays a sad blank image. I haven't figured out videos, 
so this way I check so you at least don't see a sad image. */}
      {media === null? <img src = {image} /> : null}
      <p>{text}</p>
      <span>
        <li>{author}</li>
        <li>{comments}</li>
      </span>
    </div>
  )
}
