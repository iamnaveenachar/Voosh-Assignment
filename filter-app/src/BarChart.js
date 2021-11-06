import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'voosh outlet1',
          'voosh outlet2',
          'voosh outlet3',
          'voosh outlet4',
          'voosh outlet5',
          'voosh outlet6',
          'voosh outlet7',
          'voosh outlet8',
          'voosh outlet9',
          'voosh outlet10',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [
              156788, 50000, 40000, 30000, 20000, 10000, 4500, 55567, 25678,
            ],
            backgroundColors: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={500}
          height={500}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Sales Report of Outlets',
              fontsize: 25,
            },
          }}
        />
      </div>
    );
  }
}

export default BarChart;
