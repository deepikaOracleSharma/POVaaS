import React from 'react'
import LineChart from 'react-svg-line-chart'

const data = []

for (let x = 1; x <= 30; x++) {
    data.push({ x: x, y: Math.floor(Math.random() * (100)) })
}
this.state = { data };
export default class MyComponent extends React.Component {
    
    state = {
        activePoint: null,
    }

    handlePointHover = (activePoint, e) => {
        this.setState({activePoint});
        if(this.state.activePoint!=null){
         console.log(this.state.activePoint);
        }
    }
    render() {
        const {activePoint} = this.state
        return (
           <LineChart
             data={data} pointsOnHover={this.handlePointHover}
            />
        )
    }
}