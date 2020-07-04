import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init, create, update, remove } from '../../store/purchaseList/purchaseActions'

import  './style.css'

import Tabs from './tabs'
import TabsHeader from './tabsHeader'
import TabHeader from './tabHeader'
import TabsContent from './tabsContent'
import TabContent from './tabContent'
import PurchaseListTable from './PurchaseListTable'
import PurchaseForm from './PurchaseForm'

class PurchaseList extends Component {
    componentWillMount() {
        this.props.init()
    }
    render() {
        return (
            <div className='card'>
                <Tabs>
                    <TabsHeader>
                        <TabHeader title='List' target='tabList' />
                        <TabHeader title='Include' target='tabInclude' />
                        <TabHeader title='Edit' target='tabEdit' />
                        <TabHeader title='Delete' target='tabDelete' />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id='tabList'>
                            <PurchaseListTable taId='tabList'/>
                        </TabContent>
                        <TabContent id='tabInclude'>
                            <PurchaseForm onSubmit={this.props.create} tabId='tabInclude'/>
                        </TabContent>
                        <TabContent id='tabEdit'>
                            <PurchaseForm  onSubmit={this.props.update} tabId='tabEdit'/>
                        </TabContent>
                        <TabContent id='tabDelete'>
                            <PurchaseForm  onSubmit={this.props.remove} readOnly={true} tabId='tabDelete'/>
                        </TabContent>                       
                    </TabsContent>
                </Tabs>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(PurchaseList)