import React from 'react';
import {Radar} from "react-chartjs-2";

class ChartData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: null,
        datasets: [
          {
            label: "chart-test",
            data: null,
            backgroundColor: "rgba(153,255,51,0.4)",
          }
        ]

      }
    };
    this.label_maker = this.label_maker.bind(this);
    this.value_maker = this.value_maker.bind(this);
  }

  fixState() {
    this.state.data.labels = this.label_maker();
    this.state.data.datasets.data = this.value_maker();
  }

  label_maker() {
    let names = [];
    this.props.data.forEach((obj) => {

      names.push(obj.name);
    });
    return names;
  }

  value_maker() {
    let percent = [];
    this.props.data.forEach((obj) => {

      percent.push(obj.percentile);
    });
    return percent;
  }


  render() {
    console.log(this.state.data);
    this.fixState();
    const data = this.state.data;
      return (

        <div className="chart">
          <Radar
          	data={data}
          	width={1000}
          	height={500}
          	options={{
          		maintainAspectRatio: false
          	}}
          />
        </div>


      );
  }



  }
  export default ChartData;
