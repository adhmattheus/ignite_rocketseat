import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'
import { Comment } from './components/Comment'


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lafera adhonnay"
            content="texto pos"
          /> 
          <Post
            author="Lafera adhonnay"
            content="texto pos"
          />

        </main>

      </div>

    </div>
  )
}

export default App
