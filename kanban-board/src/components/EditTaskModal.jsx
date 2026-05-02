import {useState} from 'react'
import CloseIcon from '../components/CloseIcon'
const EditTaskModal = ({title, closeModal, onSave }) => {

  const [editInput, setEditInput] = useState(title);

  return (
    <div className="modal-overlay">
      <div className="modal">
          <div className="modal-header">
            <h2>Edit Task</h2>
            <div onClick={closeModal}>
              <CloseIcon />
            </div>
          </div>

          <div className="modal-body">
            <input value={editInput} onChange={(e) => setEditInput(e.target.value)} />
          </div>

          <div className="modal-footer">
            <button className='cancel-button' onClick={closeModal}>
              Cancel
            </button>
            <button className='save-button' onClick={() => onSave(editInput)}>
              Save
            </button>
          </div>
      </div>
    </div>
  )
}

export default EditTaskModal
