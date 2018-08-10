import React, { Component } from 'react';
import PieChart from "react-svg-piechart";
const data = [
  {title: "Data 1 value 100", value: 100, color: "#008bcf"},
  {title: "Data 2 value 60", value: 60, color: "#2f7d6d"},
  {title: "Data 3 value: 30", value: 30, color: "#FF0000	"},
  {title: "Data 4 value: 20", value: 20, color: "#FFFF00"},
  {title: "Data 5 value: 10", value: 10, color: "#a1d9ce"},
]
class Pie extends Component {
    render() {
      return (
        <div className="graph"><br/>
          <h2>PIE CHART</h2>
          <PieChart  data={data}   expandOnHover={true}
            expandSize={5}
            shrinkOnTouchEnd={false}
            strokeColor="#fff"
            strokeLinejoin="round"
            strokeWidth={1}
            viewBoxSize={100}/>
        </div>
      );
    }
  }
  
  export default Pie;
  

  