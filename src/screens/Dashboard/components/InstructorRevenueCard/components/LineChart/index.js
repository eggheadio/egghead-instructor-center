import React from 'react'
import {map} from 'lodash'
import {Line} from 'react-chartjs-2'

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  showScale: false,
  scales: {
    yAxes: [{display: false}],
    xAxes: [{gridLines: {
      display: false
    }}],
  },
}

const sharedData = (color) => ({
  backgroundColor: color,
  borderColor: color,
  pointBorderColor: color,
  pointHoverBackgroundColor: color,
  pointHoverBorderColor: color,
  fill: false,
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

export default ({xAxis, yAxis}) => (
  <Line 
    options={options}
    data={{
      labels: xAxis,
      datasets: map(yAxis, set => ({
        ...sharedData(set.color),
        data: set.points,
      }))
    }}
  />
)
