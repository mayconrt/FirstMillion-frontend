import React from 'react'
import ButtonGroupCrud from '../buttons/buttonsGroupCrud'

import InputForm from '../inputs/inputForm'

export default function TableRowList(props) {
    return (
        <tr key={props.list._id}>
            <td><InputForm cols='10' placeholder='Payment Date' /></td>
            <td><InputForm cols='16' placeholder='Description' /></td>
            <td><InputForm cols='10' placeholder='Value' /></td>
            <td><InputForm cols='10' placeholder='Category' /></td>
            <td><InputForm cols='10' placeholder='Payment Type' /></td>
            <td><ButtonGroupCrud edit={true} /></td>
        </tr>
    )
}
