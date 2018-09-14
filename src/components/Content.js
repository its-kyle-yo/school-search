import React from 'react'
import GMap from './Map'
import MultiGraph from './MultiGraph'
import DonutGraph from './DonutGraph'
import SiteScreenshot from './SiteScreenshot'

const formatData = dataObj => {
  let formatted = Object.keys(dataObj).map(dataPoint => {
    if (dataObj[dataPoint] * 100 === 0) {
      return null
    }

    if (dataPoint.includes('2000')) {
      return null
    }
    let x = dataPoint.replace(/_/g, ' ').toUpperCase()
    let y = dataObj[dataPoint] * 100
    return {
      x,
      y,
      label: `${x} ${Math.floor(y)}%`,
    }
  })

  let final = formatted.filter(dataPoint => dataPoint !== null)
  return final
}

const Content = props => {
  const { program_percentage } = props.academics
  const { demographics } = props.student
  const { cost } = props.latest

  const program = formatData(program_percentage)
  const demo = formatData(demographics.race_ethnicity)
  console.log(demo)
  return (
    <React.Fragment>
      <DonutGraph data={{ program, demo }} />
      <SiteScreenshot />
      <MultiGraph cost={cost} />
      <GMap location={props.location} />
    </React.Fragment>
  )
}

export default Content
