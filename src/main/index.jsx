import React from 'react'
import BasicHeader from '../pages/BasicTemplate/BasicHeader'
import BasicMenuSide from '../pages/BasicTemplate/BasicMenuSide'
import BasicFooter from '../pages/BasicTemplate/BasicFooter'
import Routes from './routes'
import Messages from '../components/msg/messages'
import Menu from '../pages/BasicTemplate/Menu'
import MenuItem from '../pages/BasicTemplate/MenuItem'

export default function Index() {
    return (
        <div>
            <BasicHeader />
            <BasicMenuSide>
                <Menu title='Transactions' icon ='fas fa-edit' open='menu-open'>
                    <MenuItem title='New Expenses' rota='#expense-new'/>
                    <MenuItem title='Purchase list' rota='#purchase-list'/>
                </Menu>
                <Menu title='Report' icon ='fa fa-table'>
                    <MenuItem title='Purchase list' />
                    <MenuItem title='Expenses' rota='#expense-report'/>
                </Menu>
                <Menu title='Register' icon='fa fa-plus-square'>
                    <MenuItem title='Product' rota='#product-register'/>
                    <MenuItem title='Fixed Expenses' rota='#fixed-expense'/>
                    <MenuItem title='Category' rota='#category'/>
                </Menu>
                <Menu title='Settings' icon='fa fa-cog'>
                    <MenuItem title='Profile' />
                </Menu>
            </BasicMenuSide>
            <div className='content-wrapper'>
                <Routes />
            </div>
            <BasicFooter />
            <Messages />
        </div>
    )
}