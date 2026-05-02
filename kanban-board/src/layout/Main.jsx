import {useState, useEffect, useRef} from 'react'
import BoardColumn from '../components/BoardColumn'


const Main = () => {

  const initState = {
    todo: [],
    inProgress: [],
    done: []
  }
  const [board, setBoard] = useState(localStorage.getItem("board") ? JSON.parse(localStorage.getItem("board")) : initState);
  
  const undoStack = useRef([]);
  const redoStack = useRef([]);
  const isUndoAction = useRef(false);
  
  function handleKeyDown(e) {
      if (e.ctrlKey && e.key === "z") {
        if(undoStack.current.length > 1) {
          const lastState = undoStack.current.pop();
          redoStack.current.push(lastState);
          const previousState = undoStack.current[undoStack.current.length - 1];
          isUndoAction.current = true;
          setBoard(previousState);
        }
      } else if (e.ctrlKey && e.key === "y") {
        if(redoStack.current.length > 0) {
          const nextState = redoStack.current.pop();
          undoStack.current.push(nextState);
          isUndoAction.current = true;
          setBoard(nextState);
        }
      }
    }

  useEffect(() => {
    if (!isUndoAction.current) {
      undoStack.current.push(board);
    }
    isUndoAction.current = false;
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  useEffect(()=> {
    
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className='main'>
      <div className='board-header'>
        <h1>My board</h1>
      </div>
      <div className='board-canvas'>
        <ul className='board'>
          <BoardColumn type="To do" tasks={board.todo} setBoard={setBoard} />
          <BoardColumn type="In Progress" tasks={board.inProgress} setBoard={setBoard} />
          <BoardColumn type="Done" tasks={board.done} setBoard={setBoard} />
        </ul>
      </div>
    </main>
  )
}

export default Main
