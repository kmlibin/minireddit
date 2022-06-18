// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

//styles
import './SearchBar.css'


export default function Searchbar() {
    // const [term, setTerm] = useState('')
    // const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     navigate(`/search?query=${term}`)
    // }
    return (
        <div className="searchbar">
            <form>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    // onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    )
}