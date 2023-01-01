import { Avatar } from './avatar'
import { Comment } from './comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './post.module.css'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
const dataFormatada = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'")

const publicadaAQuantoTempo = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true //adiciona há, cerca
  })

const [newCommentText, setNewCommentText] = useState('');
const [newCommentInvalid, setNewCommentInvalid] = useState('');

const [comments, setComments] = useState([])
const inputEmpty = newCommentText.length === 0

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function onDeleteComment(commentDeletado) {
    const listaComentarioDeletado = comments.filter(comment => {
      return commentDeletado !== comment
    })
    setComments(listaComentarioDeletado);
  }

  function handleNewCommentInvalid() {
    setNewCommentInvalid(event.target.setCustomValidity('Este campo é obrigatório'))
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={dataFormatada} dateTime={publishedAt.toISOString()}>{publicadaAQuantoTempo}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if(line.type === 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu FeedBack</strong>

        <textarea required
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit" disabled={inputEmpty}>Publicar</button>
        </footer>
      </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comment onDeleteComment={onDeleteComment} key={comment} content={comment}/>
          })}
        </div>
    </article>

  )
}