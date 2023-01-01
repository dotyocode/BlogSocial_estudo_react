import styles from './comment.module.css';
import {Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from './avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleRemoveItem() {
    onDeleteComment(content)
  }

  function handleLikeCount() {
    setLikeCount(likeCount + 1)
  } 

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/79417801?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jhonathan Perez</strong>
              <time title="11 de Maio as 8:13h" dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleRemoveItem} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}