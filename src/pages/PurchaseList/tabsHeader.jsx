import React from 'react'

export default function TabsHeader(props) {
    return (
        <div className="ui-sortable-handle" style={{ cursor: "move" }}>
            <div className="card-tools" >
                <ul className="nav nav-pills ml-auto">
                    {props.children}
                </ul>
            </div>
        </div>
    )
}