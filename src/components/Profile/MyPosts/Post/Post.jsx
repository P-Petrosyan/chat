import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="http://www.foothillertech.com/student/webdesign/2017/02_05/image/also.jpg"></img>
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;