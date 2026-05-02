import { useEffect, useRef, useState } from 'react'
import './App.css'
import Feed from './Feed'

function App() {
  const [scroll, setScroll] = useState(false);

  const hanlder = () => {
        if(window.scrollY < 300){
          setScroll(false);
          return;
        }
        setScroll(true);
  }

  const handlerClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {

    window.addEventListener("scroll", hanlder);

     return () => window.removeEventListener("scroll", hanlder);
  }, [])


  return (
    <div className="app">
      <h1>Infinite Feed</h1>
      <Feed />
      {
        scroll && 
        <button onClick={handlerClick} className="back-to-top">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path 
              d="M12 4l-8 8h5v8h6v-8h5z" 
              fill="#fff"
            />
          </svg>
        </button>
      }
    </div>
  )
}

export default App
