import React from 'react'

export default function ImputForm(props) {

    let cols = 'col-sm-'
    cols = cols + props.cols
    const { handleChange } = props

    return (
        <div className={cols}>
            <div className="form-group">
                <input {...props.input} 
                className="form-control" 
                placeholder={props.placeholder} 
                readOnly={props.readOnly} 
                type={props.type}
                value={props.value}
                onChange={handleChange}
                />
            </div>
        </div>
    )
}