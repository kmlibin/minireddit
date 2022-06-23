import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { FaReddit, FaSearch } from 'react-icons/fa'

import './NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <FaReddit color="var(--reddit-color)" fontSize="2em"/>
        <Link to="/" className="brand">
          <h1>Reddit<span className="mini">mini</span></h1>
        </Link>
      </nav>
      <div className="search">
        <SearchBar />
        <FaSearch color="grey" opacity=".5" fontSize="1.2em" />
      </div>
    </div>
  )
}
