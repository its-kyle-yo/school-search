import React from 'react'
import { VictoryChart, VictoryGroup, VictoryBar } from 'victory'

const formatGraphData = dataObj => {
  let dataArr = Object.keys(dataObj).map(dataLabel => {
    return {
      x: dataLabel,
      y: dataObj[dataLabel],
    }
  })

  return dataArr.filter(item => item.y !== null)
}

const MultiGraph = props => {
  const cost_data = props.cost.net_price.public.by_income_level
  const formattedData = formatGraphData(cost_data)

  if (formattedData.length === 0) {
    return (
      <div
        style={{
          gridArea: 'multi',
          alignSelf: 'center',
          justifySelf: 'center',
        }}>
        Insufficient Data
      </div>
    )
  }
  return (
    <div className="multi">
      <VictoryChart>
        <VictoryGroup colorScale={'qualitative'}>
          <VictoryBar data={formattedData} />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

export default MultiGraph
