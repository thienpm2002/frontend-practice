import Header from './layout/Header'
import Main from './layout/Main'
import Aside from './layout/Aside'
import './App.css'

function App() {

  return (
   <div className='app'>
     <Header />      
     <div className='content-container'>
      <Aside />
      <Main />
     </div>
   </div>
  )
}

export default App
