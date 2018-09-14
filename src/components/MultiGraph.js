import React from 'react'
import { VictoryChart, VictoryStack, VictoryArea } from 'victory'

const formatGraphData = dataObj => {
  let dataArr = Object.keys(dataObj).map(dataLabel => {
    return {
      x: dataLabel,
      y: dataObj[dataLabel],
    }
  })

  return dataArr
}

const MultiGraph = props => {
  const cost_data = props.cost.net_price.public.by_income_level
  const formattedData = formatGraphData(cost_data)
  console.log(formattedData)
  return (
    <div className="multi">
      <VictoryChart>
        <VictoryStack>
          <VictoryArea data={formattedData} name="Avg. Net Cost" />
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default MultiGraph
