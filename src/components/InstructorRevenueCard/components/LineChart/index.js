import React from 'react'
import {map} from 'lodash'
import hexToRgba from 'hex-rgba'
import {Line} from 'react-chartjs-2'
import numberFormattingByType from 'utils/numberFormattingByType'

const sharedOptions = {
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
        display: false
      },
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
}

const sharedData = (color) => ({
  borderColor: color,
  backgroundColor: hexToRgba(color, 20),
  pointBorderColor: color,
  pointHoverBackgroundColor: color,
  pointHoverBorderColor: color,
  fill: true,
  lineTension: 0.0,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 3,
  pointHoverBorderWidth: 3,
  pointRadius: 3,
  pointHoverRadius: 5,
  pointHitRadius: 5,
})

export default ({xAxis, yAxis}) => (
  <div className='w-100 h-100'>
    <Line 
      options={sharedOptions}
      data={{
        labels: xAxis,
        datasets: map(yAxis, set => ({
          ...sharedData(set.color),
          data: set.points,
        }))
      }}
    />
  </div>
)
