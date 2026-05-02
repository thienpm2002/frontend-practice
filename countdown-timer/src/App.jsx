import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [timeInput, setTimeInput] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [audio, setAudio] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const handlerChange = (e) => {
     setTimeInput(e.target.value);
     setTime(e.target.value);
     setRunning(false);
  }

  const handlerStart = () => {
    if(isRunning) return;

    setRunning(true);
    intervalRef.current = setInterval(() => {
        setTime(prev => {
          if(prev <= 1){
            clearInterval(intervalRef.current);
            setRunning(false);
            setTimeInput(0);
            audioRef.current.play();
            return 0;
          }
          return prev - 1;
        });
    }, 1000)
  }

  const handlerPause = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  }

  const handlerReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(timeInput);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, [])

  const formatTime = (time) => {
      const minute = parseInt(time / 60);
      const second = parseInt(time % 60);
      return `${parseInt(minute / 10)}${parseInt(minute % 10)}:${parseInt(second / 10)}${parseInt(second % 10)}`;
  }

  return (
   <div className="app">
     <div className="countdown-timer">
          <h1 className='title'>Countdown Timer</h1>
          <input type="number" className='input' onChange={handlerChange} value={timeInput} min={0} />
          <span className='time'>{formatTime(time)}</span>
          <div className="option">
             <button className='btn start' onClick={handlerStart}>Start</button>
             <button className='btn pause' onClick={handlerPause}>Pause</button>
             <button className='btn reset'onClick={handlerReset}>Reset</button>
          </div>  
          <audio ref={audioRef} preload="auto">
            <source src="/sounds/beep.mp3" type="audio/mp3"/>
          </audio>
      </div>    
   </div>
  )
}

export default App
