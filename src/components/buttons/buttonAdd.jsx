import React from 'react'

export default function ButtonAdd(props) {
    let cols = 'col-sm-'
    cols = cols + props.cols || '2'

    return (
        <div className={cols}>
            <div className="form-group">
                <button type="submit" className="btn btn-success">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
        </div>
    )
}
