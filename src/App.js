import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read';
import Modal from './components/Modal';

const App = () => {
  const [info, setInfo] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState({})
  const allValue = (newObj) => {
    let newInfo = [...info];
    newInfo.push(newObj)
    setInfo(newInfo)
  }
  const DeletePeople = (id) => {
    let newInfo = info.filter((elem) => elem.id !== id);
    setInfo(newInfo)
  }
  const editInfo = (infoToEdit) => {
    setModal(true);
    setEdit(infoToEdit)
  }
  const closeModal = () => {
    setModal(false)
  }
  const saveInfo = (getNewInfo) => {
    const newInfo = info.map((elem) => {
      if(elem.id === getNewInfo.id){
        return getNewInfo
      }
      return elem
    })
    setInfo(newInfo)
    closeModal()
  }

  return (
    <div>
      <Create allValue={allValue}/>
      <Read DeletePeople={DeletePeople} info={info} editInfo={editInfo}/> 
      {modal ? <Modal closeModal={closeModal} edit={edit} saveInfo={saveInfo}/> : null}
    </div>
  )
}

export default App