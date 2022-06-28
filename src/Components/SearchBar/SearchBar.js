import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// //selectors
// import { selectPostName } from '../../Slices/dataSlice'

//icons
import { FaSearch } from 'react-icons/fa'

//styles
import './SearchBar.css'



export default function Searchbar() {
    const placeholder = useRef();
    // const redditName = useSelector(selectPostName)
    const [term, setTerm] = useState('')
    const navigate = useNavigate()


    //function to clear placeholder value on submit, goes in handlesubmit func
    const clearInput = () => (placeholder.current.value = "");

    //takes user to the search results page
    const handleSubmit = (e) => {
        e.preventDefault()
        clearInput()
        navigate(`/search?query=${term}`)
    }

    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={placeholder}
                    placeholder="search subreddit"
                    //this was initially my placeholder, but while the page was loading the bar would say
                    //"Search undefined". I put it in a condition so it would only show if reddit name was loaded, if 
                    //the data was loaded, but nothing worked. I tried storing this in state and making the input controlled,
                    //and nothing changed. I know my conditional "loading &&" was working because I tried it with simple strings
                    //I would ideally like to show the reddit name in the search bar, just need to figure it out.
                    // {`Search ${redditName[0]}`}
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                />
            </form>
            <FaSearch onClick={handleSubmit} />
        </div>
    )
}