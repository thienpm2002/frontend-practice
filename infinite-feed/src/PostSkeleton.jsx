import React from 'react'

const PostSkeleton = () => {
  return (
    <div className="post-skeleton">
        <div className="skeleton-header">
            <div className="skeleton-avatar"></div>

            <div className="skeleton-user-info">
            <div className="skeleton-line skeleton-name"></div>
            <div className="skeleton-line skeleton-time"></div>
            </div>
        </div>

        <div className="skeleton-line skeleton-title"></div>

        <div className="skeleton-body">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
        </div>

        <div className="skeleton-tags">
            <div className="skeleton-tag"></div>
            <div className="skeleton-tag"></div>
            <div className="skeleton-tag"></div>
        </div>

        <div className="skeleton-footer">
            <div className="skeleton-stat"></div>
            <div className="skeleton-stat"></div>
            <div className="skeleton-stat"></div>
        </div>
    </div>
  )
}

export default PostSkeleton
