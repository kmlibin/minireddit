//styles
import './Home.css'

//components
import SubReddits from '../Components/SubReddits/SubReddits'
import Feed from '../Components/Feed/Feed'

export default function Home() {
  return (
    <div className = 'container'>
        <Feed />
        <SubReddits />
    </div>
  )
}
