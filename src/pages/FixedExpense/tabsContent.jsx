import React from 'react'

export default function TabsContent(props) {
    return (
        <div className="card-body">
            <div className='tab-content p-0'>
                {props.children}
            </div>
        </div>
    )
}