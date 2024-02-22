import React from 'react'
import PostUpadate from './PostUpadate'
import "../readmore.css";
export const Readmore = () => {
  return (
    <div className='readme'>
        <div className='readme1'>
            <h1>Recent</h1>
            <h3><span>Post and Updates</span></h3>
        </div>
      <div>
      <div className='readme2'>
      <PostUpadate/>
      </div>
      </div>
    </div>
  )
}
