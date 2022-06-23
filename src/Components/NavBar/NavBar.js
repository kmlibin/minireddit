import { Link } from 'react-router-dom'

//react icons
import { FaReddit } from 'react-icons/fa'

//components
import SearchBar from '../SearchBar/SearchBar'

//styles
import './NavBar.css'

export default function NavBar() {

  return (
    <div className="navbar">
      <nav>
        <FaReddit />
        <Link to="/" className="brand">
          <h1>Reddit<span className="mini">mini</span></h1>
        </Link>
      </nav>
      <div className="search">
        <SearchBar />
      </div>
    </div>
  )
}
