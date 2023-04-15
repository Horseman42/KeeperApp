import React, { useState } from 'react'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setNote((pre) => {
      return {
        ...pre,
        [name]: value,
      }
    })
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.onAdd(note)
            setNote({
              title: '',
              content: '',
            })
          }}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default CreateArea
