import React, { useEffect, useRef, useState } from 'react'
import PostItem from "./PostItem"
import PostSkeleton from "./PostSkeleton"

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [latest, setLatest] = useState(false);
  const [loading, setLoading] = useState(false);

  const sentinelRef = useRef(null);

  useEffect(() => {
     async function fetchData() {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/posts?limit=10&skip=${skip}`);
        const data = await res.json();
        if(data.posts.length < 10){
         setLatest(true);
        }
        setPosts(prev => [...prev, ...data.posts]);
        setLoading(false);
     }
     const timer = setTimeout(() => fetchData(), 1000);
     
     return () => clearTimeout(timer);
  }, [skip])  

  useEffect(() => {
     if(!sentinelRef.current) return;

     const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && !latest) {
         setSkip(prev => prev + 10);
      }
      }, {
         root: null,
         threshold: 0.1
      });
      
      observer.observe(sentinelRef.current);

      return () => observer.disconnect();

  }, [posts, loading, latest])


  return (
   <div className="feed">
        {
            posts.map((post, index) => {
               const isLast = index === posts.length - 1;

               return (
                  <PostItem 
                     key={post.id}
                     sentinelRef={isLast ? sentinelRef : null} 
                     id={post.id} 
                     userId={post.userId} 
                     title={post.title} 
                     body={post.body} 
                     views={post.views} 
                     tags={post.tags} 
                     reactions={post.reactions} 
                  />
               )
            })
        }
        {latest ? <p>Đã hết bài</p> : <PostSkeleton />}
    </div>
  )
}

export default Feed
