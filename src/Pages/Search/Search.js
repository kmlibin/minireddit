import { useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


//selectors
import { selectPosts } from '../../Slices/dataSlice'

//components 
import FeedCard from '../../Components/Feed/FeedCard'

//styles
import './Search.css'

export default function Search({ fetchComments }) {
    //access to dataslices
    const posts = useSelector(selectPosts)

    //set up query params
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('query')

    //check that it's grabbing the term
    console.log(query)

    //filter through data, push to a new array. use that array to pass values to FeedCard
    // what about numbers? i.e., I typed in a single digit, and it will find anything with 
    // the number in ANY of the data(like image links). toString?

    let results = []
    const filteredData = posts.forEach((post) => {
        if (Object.values(post).join('').toLowerCase().includes(query.toLowerCase())) {
            results.push(post)
        }
        return results
    })

    //check that the results 
    console.log(results)

    return (
        <div className="feed-container">
            {results.length < 1 && (
                <div className="no-results">
                    <h2 className="page-title" >Sorry, no results found matching "{query}"
                    </h2>
                    <Link to="/">Return to Home</Link>
                </div>
            )}

            {results.length >= 1 && (
                <div>
                    <h2 className="page-title">Results including "{query}" :</h2>
                    {results.map(post => (
                        <FeedCard
                            fetchComments={fetchComments}
                            key={post.id}
                            upVotes={post.upVotes}
                            image={post.image}
                            title={post.title}
                            media={post.media}
                            text={post.text}
                            author={post.author}
                            timeStamp={post.timeStamp}
                            comments={post.comments}
                        />
                    ))}
                </div>)}
        </div>
    )
}