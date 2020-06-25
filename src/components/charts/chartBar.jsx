import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getTotalByCategory} from '../../store/dashboard/dashboardActions'

class Chart extends Component {

    componentWillMount(){
        this.props.getTotalByCategory()
    }    

    getColorRendom(){

        const min = Math.ceil(1);
        const max = Math.floor(255);

        let color = 'rgba(' + (Math.floor(Math.random() * (max - min + 1)) + min) + ','
        color = color + (Math.floor(Math.random() * (max - min + 1)) + min )+ ','
        color = color + (Math.floor(Math.random() * (max - min + 1)) + min) + ', 1.6)'

        return color
    }

    generateChart(){

        const totalArray = this.props.totalByCategory

        let labelList = []
        let totalList = []
        let colorList = []
        
        totalArray.map((i) => {
          labelList.push(i._id) 
          totalList.push(i.total) 
          colorList.push(this.getColorRendom())
      })
      
       const stateChart ={
           chartData:{
               labels: labelList,
               datasets: [
                   {
                       label:'Population',
                       data: totalList,
                       backgroundColor: colorList
                   }
               ]
           }
       }

       return stateChart

    }

    render() {
        const stateChart = this.generateChart()

        return (
            <div className='chart'>
                <Bar
                    data={stateChart.chartData}
                    width={30}
                    height={10}                    
                    options={{ 
                        legend: {
                            display: false,
                            position:"left"
                          },                        
                        title:{
                            display:false,
                            text: 'Despesas Mensal',
                            fontSize:20
                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({totalByCategory: state.dashboard.totalByCategory})
const mapDispatchToProps = dispatch => bindActionCreators({getTotalByCategory}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Chart)