import React, { useState } from 'react'
import "./ModalStyle.css"

const Modal = (props) => {
  const [newInfo, setInfo] = useState(props.edit);
  // const editInfoPeople = (e) => {
  //   let newObj = {...newInfo};
  //   newObj.name = e.target.value;
  //   newObj.surname = e.target.value;
  //   newObj.number = e.target.value;
  //   newObj.mail = e.target.value;
  //   setNewInfo(newObj);
  // }
  return (
     <div className="main-modal">
        <div className="inner-modal">
            <div>
                <button className='close' onClick={props.closeModal}>&times;</button>
            </div>
            <div className="inputs">
            <input type="text" onChange={(e) => {newInfo.name = e.target.value}} defaultValue={newInfo.name}/>
            <input type="text" onChange={(e) => {newInfo.surname = e.target.value}} defaultValue={newInfo.surname}/>
            <input type="text" onChange={(e) => {newInfo.number = e.target.value}} defaultValue={newInfo.number}/>
            <input type="text" onChange={(e) => {newInfo.mail = e.target.value}} defaultValue={newInfo.mail}/>
            <button onClick={() => props.saveInfo(newInfo)}>Сохранить</button>
            </div>
        </div>
      </div>
  )
}

export default Modal