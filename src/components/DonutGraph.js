import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'

const DonutGraph = props => {
  const settings = {
    height: 350,
    labelComponent: <VictoryTooltip />,
    innerRadius: 100,
    colorScale: ['tomato', 'orange', 'gold', 'cyan', 'navy'],
  }

  return (
    <div className="donuts">
      <div>
        <VictoryPie data={props.data.program} {...settings} />
      </div>
      <div>
        <VictoryPie data={props.data.demo} {...settings} />
      </div>
    </div>
  )
}
export default DonutGraph
