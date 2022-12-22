import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/adhmattheus.png',
      name: 'Mattheus Adhonnay',
      role: 'Software Engineer Jr'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design / doctorcare' },
    ],
    publishedAt: new Date('2022-12-12 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/eldoncosta1.png',
      name: 'Eldon Costa',
      role: 'Software Engineer Pl'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design / doctorcare' },
    ],
    publishedAt: new Date('2022-10-20 13:00:00'),
  }
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  );
};
export default App;