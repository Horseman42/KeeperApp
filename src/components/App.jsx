import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([])

  function handleSubmit(note){
    setItems(pre =>{
      return [...pre, note]
    })

    

  }

  function deleteBtn(id){
    setItems(pre =>{
      return pre.filter((items, index)=>{
        return index !== id
      })
    })

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleSubmit} />
      {
        items.map((item, index) =>(
          <Note 
          key={index} 
          id={index} 
          title={item.title} 
          content={item.content} 
          onDelete={deleteBtn}  />))
      }
      
      <Footer />
    </div>
  );
}

export default App;
