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
}

const optionsByType = {
  simple: {
    showScale: false,
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
        display: false
      }],
    },
    tooltips: {
      enabled: false,
    },
  },
  detail: {
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: (tooltipItems) => (
          numberFormattingByType.general(tooltipItems.yLabel)
        ),
      },
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
})

const dataByType = {
  simple: {
    pointBorderWidth: 0,
    pointHoverRadius: 0,
    pointHoverBorderWidth: 0,
    pointRadius: 0,
    pointHitRadius: 0,
  }, 
  detail: {
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 3,
    pointHitRadius: 10,
  },
}

export default ({
  xAxis,
  yAxis,
  type = 'simple',
  className,
}) => (
  <div className={`w-100 ${className}`}>
    <Line 
      options={{
        ...sharedOptions,
        ...optionsByType[type],
      }}
      data={{
        labels: xAxis,
        datasets: map(yAxis, set => ({
          ...sharedData(set.color),
          ...dataByType[type],
          data: set.points,
        }))
      }}
    />
  </div>
)
