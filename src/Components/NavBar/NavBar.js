import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

export default function NavBar() {
  return (
    <div className="navbar">
        <Link to="/" className="brand">
            <h1>miniReddit</h1>
        </Link>
        <SearchBar />

    </div>
  )
}
