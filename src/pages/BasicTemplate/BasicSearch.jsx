import React from 'react'
import DateRangerPicker from '../../components/date/dateRangerPicker'
import InputText from '../../components/inputs/inputText'
import ButtonSeach from '../../components/buttons/buttonSeach'
import ButtonClear from '../../components/buttons/buttonClear'
import ButtonAdd from '../../components/buttons/buttonAdd'


export default function BasicSearch() {
    return (
        <div className='content-header'>
            <div className='row'>
                <DateRangerPicker />
                <InputText cols='4' />
                <ButtonSeach cols='0' />
                <ButtonClear cols='1' />
                <ButtonAdd cols='0' />
            </div>
        </div>
    )
}