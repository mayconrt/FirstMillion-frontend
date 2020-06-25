import React from 'react'
import ChartPie from './chartPie'
import ChartBar from './chartBar'

export default function ChartMonthExpense(props) {

    let bar = false
    let pie = false

    if(props.charts == 'bar'){
        bar = true
    }

    if(props.charts == 'pie'){
        pie = true
    }

    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                        <h3 className="card-title">{props.title}</h3>
                        <a href="#">View Report</a>
                    </div>
                </div>
                <div className="card-body">
                    {/* <div className="d-flex">
                        <p className="d-flex flex-column">
                            <span className="text-bold text-lg">$18,230.00</span>
                            <span>Balance</span>
                        </p>
                        <p className="ml-auto d-flex flex-column text-right">
                            <span className="text-success">
                                <i className="fas fa-arrow-up"></i> 33.1%
                    </span>
                            <span className="text-muted">Since last month</span>
                        </p>
                    </div> */}
                    {bar && (<ChartBar />)}
                    {pie && (<ChartPie />)}

                    {/* <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                            <i className="fas fa-square text-primary"></i>{props.firstTitle}
                        </span>

                        <span>
                            <i className="fas fa-square text-gray"></i>{props.secondTitle}
                        </span>
                    </div> */}
                </div>
            </div>


        </div>
    )
}