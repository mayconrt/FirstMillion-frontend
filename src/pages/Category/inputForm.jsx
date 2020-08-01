import React from 'react'

export default function ImputForm(props) {

    const cols = `col-${props.col}`
    
    return (
        <div className={`form-group ${cols}`}>
            <input {...props.input}
                className="form-control"
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type}
            />
        </div>
    )
}