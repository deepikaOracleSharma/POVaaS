import React, { Component } from 'react';
import DonutChart from "react-svg-donut-chart";
const data = [
  {value: 50, stroke: "#008bcf", strokeWidth: 6},
  {value: 80, stroke: "#2f7d6d"},
  {value: 30, stroke: "#FFFF00"},
  {value: 80, stroke: "#FF0000"},
  {value: 10, stroke: "#a1d9ce"},
]
class Pie extends Component {
    render() {
      return (
        <div className="graph"><br/>
          <h2>PIE CHART</h2>
          <DonutChart data={data} />
        </div>
      );
    }
  }
  
  export default Pie;
  

  