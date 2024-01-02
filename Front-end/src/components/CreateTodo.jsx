import { useState } from "react";

export function CreateTodo() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px'
      }}>
        <input type="text" placeholder="title" style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          margin: '10px 0',
          fontSize: '16px',
          outline: 'none',
          '&:focus': {
            border: '1px solid #333'
          }
        }} onChange={function(e){
          console.log(e.target.value)
          setTitle(e.target.value);
        }}/>
        <input type="text" placeholder="description" style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          margin: '10px 0',
          fontSize: '16px',
          outline: 'none',
          '&:focus': {
            border: '1px solid #333'
          }
        }} onChange={function(e){
          console.log(e.target.value)
          setDescription(e.target.value);
        }}/>
        <button style={{
          backgroundColor: '#4CAF50',
          border: 'none',
          color: 'white',
          padding: '10px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '5px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#3e8e41'
          }
        }} onClick={function(){
          fetch("http://localhost:3000/todo",{
            method : "POST",
            body : JSON.stringify({
              title : title,
              description : description
            }),
            headers : {
              "Content-type" : "application/json"
            }
          })
          .then(async (res) =>{
            await res.json();
            alert("Done");
          })
        }}>Add Todo</button>
      </div>
    );
  }
  