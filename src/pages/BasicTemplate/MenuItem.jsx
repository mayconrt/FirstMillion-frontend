import React from 'react'

export default function MenuItem(props){
    return(
        <li className="nav-item">
            <a href={props.rota} className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>{props.title}</p>
            </a>
        </li>    
    )
}