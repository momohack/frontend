import React from 'react';
import {Radar} from "react-chartjs-2";

class ChartData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: this.props.data.forEach((obj) => {
          let names = [];
          names.push(obj.name);
          if (this.props.data[this.props.data.length-1] === obj) {
            return names;
          }
        }),
        datasets: [
          {
            label: "chart-test",
            data: [
              this.props.data.forEach((obj) => {
                let percent = [];
                percent.push(obj.percentile);
                if (this.props.data[this.props.data.length-1] === obj) {
                  return percent;
                }
              })
            ]
          }
        ]

      }
    };
  }

  render() {
    console.log(this.props.data);
    const data = this.props.data.percentile || {};
    const chartoptions = this.props.chartoptions || [];
      return (

        <div className="chart">
          <Radar
          	data={data}
          	width={100}
          	height={50}
          	options={{
          		maintainAspectRatio: false
          	}}
          />
        </div>


      );
  }



  }
  export default ChartData;
