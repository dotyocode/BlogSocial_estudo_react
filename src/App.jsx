import { Header } from './components/header';
import styles from './app.module.css'
import './globalStyles.css'
import { SideBar } from './components/sideBar';
import { Post } from './components/post';


//author: {avatar_url: '', name: '', role:},
//publishedAt: Date,
//

const posts = [
  {id: 1,
    author: {
      avatar_url: 'https://github.com/dotyocode.png',
      name: 'Jhonathan Perez',
      role: 'Software Engineer'
    },
    publishedAt: new Date('2022-05-03 20:00:00'),
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '<a href="">jane.design/doctorcare</a>'}        
    ]
  },
  {id: 2,
    author: {
      avatar_url: 'https://github.com/maykbrito.png',
      name: 'Mayke Brito',
      role: 'Educator'
    },
    publishedAt: new Date('2022-05-10 20:00:00'),
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '<a href="">jane.design/doctorcare</a>'}        
    ]
  },
]

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
            />
          })}
        </main>
      </div>
    </>
  )
}
