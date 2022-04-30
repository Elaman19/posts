import { MyButton } from "./UI/button/MyButton"
import { useNavigate } from 'react-router-dom'

export const PostItem = (props) => {
  const { post, remove } = props
  const navigate = useNavigate()
  return (
    <div className='postItem'>
      <div className='post-content'>
        <strong>{props.post.id}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post-btn">
        <MyButton onClick={e => navigate(`/posts/${post.id}`)}>Open</MyButton>
      </div>
      <div className="post-btn">
        <MyButton onClick={e => remove(post)}>Delete</MyButton>
      </div>
    </div>
  )
}