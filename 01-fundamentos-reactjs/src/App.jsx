import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
function App() {
  return (
    <div>
      <Header />
      <Post
        author="lafera adhonnay"
        content="texto do lafera"
      />

    </div>
  )
}

export default App
