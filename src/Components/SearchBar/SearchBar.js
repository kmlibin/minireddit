import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectPostName } from '../../Slices/dataSlice'
//styles
import './SearchBar.css'



export default function Searchbar() {
    const redditName = useSelector(selectPostName)
    const [term, setTerm] = useState('')
    const navigate = useNavigate()
   

    const handleSubmit = (e) => {
        e.preventDefault()
       //clear searchbar on submit
        navigate(`/search?query=${term}`)
    }
 
    
    return (
        <div className="searchbar">
            <form onSubmit ={handleSubmit}>
                <input
                    type="text"
                    value={term}
                    //enter logic for if home component is mounted, it must display something else
                    placeholder={`Search ${redditName[0]}`}
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    )
}