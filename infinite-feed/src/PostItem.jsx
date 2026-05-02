import React from 'react'
import {
  Heart,
  Eye,
  ThumbsDown,
  User,
  Tag
} from "lucide-react";

const PostItem = ({ sentinelRef, id, userId, title, body, tags, views, reactions }) => {
  return (
    <div className='post-item' id={id} ref={sentinelRef}>
      <div className='header'>
          <User className="avatar-icon" />
          <p>{"User " + userId}</p>
      </div>
      <h3 className='title'>{title}</h3>
      <p className='body'>{body}</p>
      <div className='tags'>
        {
          tags.map(tag => 
                   <div key={tag} className='tag'>
                      <Tag className="action-icon icon-tag" />
                      {tag}
                    </div>
                  )
        }
      </div>
      <div className='footer'>
        <div className='group-icon'>
          <Heart className="action-icon liked" />
         <span>{reactions.likes}</span>
        </div>
        <div className='group-icon'>
          <ThumbsDown className="action-icon icon-dislike" />
         <span>{reactions.dislikes}</span>
        </div>
        <div className='group-icon'>
         <Eye className="action-icon icon-eye" />
         <span>{views}</span>
        </div>
      </div>
    </div>
  )
}

export default PostItem
