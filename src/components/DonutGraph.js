import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'

const DonutGraph = props => {
  const settings = {
    height: 375,
    labelComponent: (
      <VictoryTooltip style={{ fontSize: 25 }} cornerRadius={0} />
    ),
    innerRadius: 100,
    colorScale: ['tomato', 'orange', 'gold', 'cyan', 'navy'],
    padAngle: 3,
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
