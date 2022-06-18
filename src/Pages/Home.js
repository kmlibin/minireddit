//styles
import './Home.css'

//components
import SubReddits from '../Components/SideBar/SideBar'
import Feed from './Feed/Feed'

export default function Home() {
  return (
    <div className = 'container'>
        <Feed />
        <SubReddits />
    </div>
  )
}
