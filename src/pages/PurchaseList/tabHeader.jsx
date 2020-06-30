import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectTab} from '../../store/purchaseList/purchaseActions'

class TabHeader extends Component {
    render() {
        const selected    = this.props.tab.selected === this.props.target
        const classActive = selected ? 'active' : ''
        const classes     = 'nav-link ' + classActive

        return (
            <li className="nav-item">
                <a className={classes} 
                   data-toggle='tab'
                   onClick={()=> this.props.selectTab(this.props.target)}>{this.props.title}</a>
            </li>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)