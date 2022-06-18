import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Home from './Pages/Home';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
