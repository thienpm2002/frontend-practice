import {useState} from 'react'
import Card from '../components/Card'
import PlusIcon from '../components/PlusIcon'
import CloseIcon from '../components/CloseIcon'
import EditTaskModal from '../components/EditTaskModal'
const BoardColumn = ({ type, tasks, setBoard }) => {
  
  const [actionAdd, setActionAdd] = useState(false);
  const [inputCard, setInputCard] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectCard, setSelectCard] = useState({id: "", title: ""});
  const typeColumn = (type.charAt(0).toLowerCase() + type.slice(1)).replace(" ", "");
 
  const handlerActionAdd = () => {
    setActionAdd(true);
  }

  const handlerAddCard = () => {
    if(inputCard.trim() === "") return;
    const card = {
      id: crypto.randomUUID(),
      title: inputCard.trim()
    }
    setBoard(prev => {
      const newBoard = {...prev};
      newBoard[typeColumn] = [...newBoard[typeColumn], card];
      return newBoard;
    })
    setActionAdd(false);
    setInputCard("");
  }

  const handlerRemoveActionAdd = () => {
    setActionAdd(false);
    setInputCard("");
  }

  const handlerRemoveCard = (id) => {
    setBoard(prev => {
      const newBoard = {...prev};
      newBoard[typeColumn] = newBoard[typeColumn].filter(card => card.id !== id);
      return newBoard;
    })
  }

  const handlerEditCard = (id, title) => {
      setSelectCard({id, title});
      setIsModalOpen(true);
  }

  const handlerCloseModal = () => {
    setIsModalOpen(false);
  }

  const handlerSaveEdit = (newTitle) => {
       setBoard(prev => {
        const newBoard = {...prev};
        newBoard[typeColumn] = newBoard[typeColumn].map(card => {
          if(card.id === selectCard.id) {
            return {...card, title: newTitle};
          }
          return card;
        });
        return newBoard;
      });
      setIsModalOpen(false);
  }

  const handleDrop = (e, toColumn) => {
    const card = JSON.parse(e.dataTransfer.getData("card"));
    const fromColumn = card.column;
    setBoard(prev => {
      const newBoard = {...prev};
      newBoard[fromColumn] = newBoard[fromColumn].filter(c => c.id !== card.id);
      newBoard[toColumn] = [...newBoard[toColumn], {id: card.id, title: card.title}];
      return newBoard;
    });
  }

  return (
    <>
      <li className={`column ${typeColumn}`}>

        <h3>{type}</h3>

        <ul className="cards" onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, typeColumn)}>
          {tasks.map((task) => (
            <Card key={task.id} id={task.id} title={task.title} onRemove={handlerRemoveCard} onEdit={handlerEditCard} column={typeColumn} />
          ))}
          {actionAdd && (
            <input 
              className="add-card-input" 
              type="text" 
              placeholder="Enter a title for this card..." 
              value={inputCard}
              onChange={(e) => setInputCard(e.target.value)}
            />
          )}
        </ul>

        {!actionAdd ? (
          <div className='footer-column' onClick={handlerActionAdd}>
            <PlusIcon />
            <p>Add a card</p>
          </div>
        ) : (
          <div className='add-card-actions'>
            <button onClick={handlerAddCard}>Add Card</button>
            <div onClick={handlerRemoveActionAdd}>
                <CloseIcon />
            </div>
          </div>
        )}

      </li>
      {isModalOpen && <EditTaskModal closeModal={handlerCloseModal} title={selectCard.title} onSave={handlerSaveEdit} />}
    </>
  )
}

export default BoardColumn
