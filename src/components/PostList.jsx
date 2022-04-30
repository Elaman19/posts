import { PostItem } from "./PostItem"
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export const PostList = ({posts, header, remove}) => {
  if (!posts.length){
    return (
      <h1 style={{marginTop: '10px', textAlign: 'center'}}>
        Posts do not found
      </h1>
    )
  }

  return (
    <div className='postList'>
      <h1 style={{textAlign: 'center'}}>{ header }</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index+1} key={post.id} post={post} />
          </CSSTransition> 
        )}
      </TransitionGroup>
    </div>
  )
}