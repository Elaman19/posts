import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';
import { useState } from 'react';

export const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {...post, id: Date.now()}
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
      <MyInput type='text' value={post.title} onChange={e => setPost({...post, title: e.target.value})} placeholder='Post name'/>
      <MyInput type='text' value={post.body} onChange={e => setPost({...post, body: e.target.value})} placeholder='Post description'/>
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  )
}