import React from 'react'

export default function ImputText(props) {

    let cols = 'col-sm-'
    cols = cols + props.cols


    return (
        <div className={cols}>
            <div className="form-group">            
                <input value={props.value} type="text" className="form-control" placeholder="Enter ..." />
            </div>
        </div>
    )
}