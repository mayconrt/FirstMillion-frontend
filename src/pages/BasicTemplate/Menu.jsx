import React from 'react'

export default function Menu(props) {
    let classesIcon = 'nav-icon ' + props.icon
    let classesActive = 'nav-link ' + props.active
    let classesOpen = 'nav-item has-treeview ' + props.open

    return (
        <li className={classesOpen}>
            <a href="#" className={classesActive}>
                <i className={classesIcon}></i>
                <p>{props.title}<i className="right fas fa-angle-left"></i></p>
            </a>
            <ul className="nav nav-treeview">
                {props.children}
            </ul>
        </li>
    )
}