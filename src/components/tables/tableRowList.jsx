import React from 'react'

import ButtonGroupCrud from '../buttons/buttonsGroupCrud'

export default function TableRowList(props) {
    return (
        <tr key={props.list._id}>
            <td>{props.list.paymentDate}</td>
            <td>{props.list.description}</td>
            <td>{props.list.value}</td>
            <td>{props.list.category}</td>
            <td>{props.list.paymentType}</td>
            <td><ButtonGroupCrud edit={false} /></td>
        </tr>
    )
}
