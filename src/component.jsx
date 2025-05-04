import React, {useState} from 'react'

export default function Component() {
    const [text, setText] = useState()
    const textOnChange = (event) => {
        setText(event.target.value)
    }
    return (
    <div>
        <input type="text" value={text} onChange={textOnChange}/>
        <button>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado</p>

    </div>
  )
}
