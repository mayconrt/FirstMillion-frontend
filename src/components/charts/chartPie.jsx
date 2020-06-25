import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

class Chart extends Component {
    constructor(props){
    super(props)
        
    const estado = [
        {
          "_id": "CASA",
          "total": 6990
        },
        {
          "_id": "PRESENTE",
          "total": 100
        },
        {
          "_id": "SAUDE",
          "total": 180
        },
        {
          "_id": "LAZER",
          "total": 300
        }
      ]

      let labelList = []
      let totalList = []
      let colorList = []
      
      estado.map((i) => {
        labelList.push(i._id) 
        totalList.push(i.total) 
        colorList.push(this.getColorRendom())
    })
    
     this.state ={
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
    }


    getColorRendom(){

        const min = Math.ceil(1);
        const max = Math.floor(255);

        let color = 'rgba(' + (Math.floor(Math.random() * (max - min + 1)) + min) + ','
        color = color + (Math.floor(Math.random() * (max - min + 1)) + min )+ ','
        color = color + (Math.floor(Math.random() * (max - min + 1)) + min) + ', 1.6)'

        return color
    }

    render() {
        return (
            <div className='chart'>
                <Pie
                    data={this.state.chartData}
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

export default Chart