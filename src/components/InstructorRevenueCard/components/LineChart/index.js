import React from 'react'
import {map} from 'lodash'
import hexToRgba from 'hex-rgba'
import {Line} from 'react-chartjs-2'
import numberFormattingByType from 'utils/numberFormattingByType'

const sharedDataWithColor = (color) => ({
  borderColor: color,
  backgroundColor: hexToRgba(color, 20),
  pointBorderColor: color,
  pointHoverBackgroundColor: color,
  pointHoverBorderColor: color,
  fill: true,
  lineTension: 0.3,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 2,
  pointRadius: 3,
  pointHitRadius: 10,
})

export default ({xAxis, yAxis, yAxisType}) => (
  <Line 
    options={{
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      showScale: false,
      scales: {
        yAxes: [{
          display: false,
        }],
        xAxes: [{
          gridLines: {
            display: false,
          }
        }],
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: (tooltipItems) => (
            numberFormattingByType.general(tooltipItems.yLabel)
          ),
        },
      },
    }}
    data={{
      labels: xAxis,
      datasets: map(yAxis, set => ({
        ...sharedDataWithColor(set.color),
        data: set.points,
      }))
    }}
  />
)
