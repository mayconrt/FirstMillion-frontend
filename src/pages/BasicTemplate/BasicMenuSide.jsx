import React from 'react'

export default function BasicMenuSide(props) {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">

                {/* <img src={c3rlogImg} alt="C3R Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} /> */}
                <span className="brand-text font-weight-light">First Million</span>
            </a>
            <div className='sidebar'>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
                        {props.children}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}