import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'


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
        </main>
      </div>

    </div>
  )
}

export default App
