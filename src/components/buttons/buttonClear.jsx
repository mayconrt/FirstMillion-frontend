import React from 'react'

export default function ButtonClear(props) {
    let cols = 'col-sm-'
    cols = cols + props.cols || '2'

    return (
        <div className={cols}>
            <div className="form-group">
                <button type='button' onClick={props.handleClear} className="btn btn-secondary">
                    <i className="fas fa-eraser"></i>
                </button>
            </div>
        </div>
    )
}
