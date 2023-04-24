import React from 'react'

const Read = (props) => {
  const styleCards = {
    width: "40%",
    border: "3px solid black",
    borderRadius: "1em",
    padding: "1em 0 0 6%"
  }
  const styleBtns = {
    border: "none",
    padding: "1em 1.6em",
    backgroundColor: "green",
    borderRadius: "1em",
    fontWeight: "bold",
    margin: "1em",
    cursor: "pointer"
  }
  return (
    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
        {props.info.map((elem) => (
          <ul key={elem.id} style={styleCards}>
            <li style={{listStyle: "none", fontSize: "1.4em", fontWeight: "bolder"}}>Имя: {elem.name}</li>
            <li style={{listStyle: "none", fontSize: "1.4em", fontWeight: "bolder"}}>Фамилия: {elem.surname}</li>
            <li style={{listStyle: "none", fontSize: "1.4em", fontWeight: "bolder"}}>Номер: {elem.number}</li>
            <li style={{listStyle: "none", fontSize: "1.4em", fontWeight: "bolder"}}>Почта: {elem.mail}</li>
            <button onClick={() => props.editInfo(elem)} style={styleBtns}>Edit</button>
            <button onClick={() => props.DeletePeople(elem.id)} style={styleBtns}>Delete</button>
          </ul>
        ))}
    </div>
  )
}

export default Read