import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab } from '../../store/purchaseList/purchaseActions'

import Tabs from './tabs'
import TabsHeader from './tabsHeader'
import TabHeader from './tabHeader'
import TabsContent from './tabsContent'
import TabContent from './tabContent'

class PurchaseList extends Component {
    componentWillMount() {
        this.props.selectTab('tabList')
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
                        <TabContent id='tabList'><h1>tab List</h1></TabContent>
                        <TabContent id='tabInclude'><h1>tabInclude</h1></TabContent>
                        <TabContent id='tabEdit'><h1>tabEdit</h1></TabContent>
                        <TabContent id='tabDelete'><h1>tabDelete</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(null, mapDispatchToProps)(PurchaseList)