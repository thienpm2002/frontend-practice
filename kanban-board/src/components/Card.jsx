import React from 'react'
import EditIcon from '../components/EditIcon'
import CloseIcon from '../components/CloseIcon'

const Card = ({id, title, onRemove, onEdit, column}) => {

  function handleDragStart(e, card) {
    e.dataTransfer.setData("card", JSON.stringify(card));
  }

  return (
   <li 
    className="card" 
    id={id} onClick={() => onEdit(id, title)} 
    draggable
    onDragStart={(e) => handleDragStart(e, {id, title, column})}
   >
     <p>{title}</p>
      <div onClick={(e) => {
        e.stopPropagation();
        onRemove(id);
      }}>
        <CloseIcon />
      </div>
   </li>
  )
}

export default Card
