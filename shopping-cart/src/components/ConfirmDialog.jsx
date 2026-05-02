import React from 'react'

const ConfirmDialog = ({ setIsOpen, setCarts }) => {
  
  const handlerConfirmOk = () => {
    setCarts([]);
    setIsOpen(false);
  }

  const handlerConfirmNo = () => {
    setIsOpen(false);
  }  
    
  return (
    <div className='dialog'>
          <div className="dialog-content">
            <h3>Are you sure you want to delete it?</h3>
            <div className='confirm'>
                <button className='btn-confirm btn-ok'onClick={handlerConfirmOk}>Ok</button>
                <button className='btn-confirm btn-no' onClick={handlerConfirmNo}>No</button>
            </div>
          </div>
    </div>
  )
}

export default ConfirmDialog
