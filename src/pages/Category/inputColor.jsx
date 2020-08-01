import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import iconPaleta from '../../assets/paletacor.png'


export default function InputColor(props) {
  const [color, setColor] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)

  function setValue(value) {
    setColor(value)
    props.setValue(value)

  }

  return (
    <div className="input-group col-4" style={{ "height": "100px" }}>
      <div className='row'>
        <div className='col-2'>
          <button className='btn btn-primary col-2'
            type='button'
            onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
            style={{ width: '280px', border: 'solid', backgroundColor: color, backgroundImage: iconPaleta }}
            ></button>
        </div>
        <div className='col-2'>
          {
            showColorPicker && (
              <ChromePicker color={color} onChange={updateColor => setValue(updateColor.hex)} />
            )
          }
        </div>
      </div>
    </div>
  )
}