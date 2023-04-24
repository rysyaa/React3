import React, { useState } from 'react'

const Create = (props) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [mail, setMail] = useState("");
    const nameValue = (e) => {
      setName(e.target.value)
    }
    const surnameValue = (e) => {
      setSurname(e.target.value)
    }
    const numberValue = (e) => {
      setNumber(e.target.value)
    }
    const mailValue = (e) => {
      setMail(e.target.value)
    }
    const createBtn = () => {
      if(!name && !surname && !number && !mail){
        alert("Заполните поле!");
        return;
      }
      const newValue = {
        name: name,
        surname: surname,
        number: number,
        mail: mail,
        id: Date.now(),
      }
      props.allValue(newValue);
      setName('');
      setSurname('');
      setNumber('');
      setMail('');
    }
    const styleContainer = {
      margin: "3em auto 0",
      width: "60%",
      textAlign: "center",
    }
  return (
    <div style={styleContainer}>
      <h1>Контактная книжка!</h1>
        <input type="text" placeholder="name" value={name} onChange={nameValue}/>
        <input type="text" placeholder="surname" value={surname} onChange={surnameValue}/>
        <input type="number" placeholder="number" value={number} onChange={numberValue}/>
        <input type="email" placeholder="mail" value={mail} onChange={mailValue}/>
        <br />
        <button style={{marginTop: "1em", padding: "1em 1.8em", border: "none", borderRadius: "1em", backgroundColor: "green", cursor: "pointer"}} onClick={() => createBtn()}>Создать</button>
    </div>
  )
}

export default Create