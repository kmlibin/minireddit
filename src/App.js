import { BrowserRouter, Route, Routes } from 'react-router-dom'

//pages and components
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home';
import SubReddit from './Pages/SubReddit/SubReddit';
import SideBar from './Components/SideBar/SideBar';
import Search from './Pages/Search/Search'

//styles
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="reddit-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subreddit/:name" element={<SubReddit />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <SideBar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
