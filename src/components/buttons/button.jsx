import React from 'react'

export default function ButtonAdd(props) {
    let cols = 'col-sm-'
    cols = cols + props.cols || '2'

    let classAction = 'btn btn-' + props.action
    let classIcon   = props.icon

    return (
        
        <div className={cols}>
            <div className="form-group">
                {/* <button type={props.type} className={classAction}> */}
                <button type={props.type} className={classAction} onClick={()=> props.onClick(props.id)}>
                    <i className={classIcon}></i>
                </button>
            </div>
        </div>
    )
}
