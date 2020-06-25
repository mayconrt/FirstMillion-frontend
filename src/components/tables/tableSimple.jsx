import React from 'react'

export default function TableSimple(props) {
    return (
        <table className="table table-hover">
                {props.children}
        </table>
    )
}
