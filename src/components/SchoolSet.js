import React from 'react'
import School from './School'

const SchoolSet = props => {
  const { results } = props.data
  return (
    <ul className="cardSet">
      {results.map(school => (
        <School data={school} key={school.school_url} />
      ))}
    </ul>
  )
}

export default SchoolSet
