import React from 'react'
import If from '../if'

export default function ButtonGroupCrud(props) {
    return (
        <div className='row'>
            <If test={!props.edit}>
                <button className='btn btn-primary'><i className='fa fa-edit'></i></button>
                <button className='btn btn-danger'><i className='fa fa-trash'></i></button>
            </If>
            <If test={props.edit}>
                <button className='btn btn-success'><i className='fa fa-check'></i></button>
            </If>
        </div>
    )
}