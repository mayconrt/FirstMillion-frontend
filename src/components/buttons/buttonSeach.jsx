import React from 'react'

export default function ButtonSearch(props) {
    let cols = 'col-sm-'
    cols = cols + props.cols || '2'

    return (
        <div className={cols}>
            <div className="form-group">
                <button type="submit" className="btn btn-info">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}