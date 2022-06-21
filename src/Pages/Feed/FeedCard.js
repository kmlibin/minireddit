import formatDistanceToNow from 'date-fns/formatDistanceToNow'

//styles
import './FeedCard.css'

export default function FeedCard({ timeStamp, media, image, title, author, comments, text, url}) {
  const time = Math.floor((Date.now() - (timeStamp * 1000)) / (60*60*1000))

  
  // {formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true}
//   var utcSeconds = time;
// var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
// console.log(d.setUTCSeconds(utcSeconds));

  // let newTime = new Date(time)
  // console.log
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
        <p>{formatDistanceToNow(new Date(timeStamp * 1000), 20220621, {addSuffix:true})} ago</p>
      </span>
    </div>
  )
}
