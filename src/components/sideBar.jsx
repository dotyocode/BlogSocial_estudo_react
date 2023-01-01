import styles from './sideBar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './avatar'

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/dotyocode.png" />
        <strong>Jhonathan Perez</strong>
        <span>Software Enginner</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20} /> Editar seu perfil</a>
      </footer>
    </aside>
  )
}