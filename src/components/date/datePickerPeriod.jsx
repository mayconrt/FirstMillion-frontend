import React from 'react'
import DatePickerSimple from './datePickerSimple'

export default function DatePickerPeriod(){
    return(
        <div>
          <DatePickerSimple />
          <span>á</span>
          <DatePickerSimple />
        </div>
    )
}