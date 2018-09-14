import React from 'react'
import TitleBar from './TitleBar'
import Content from './Content'

class School extends React.Component {
  render() {
    const { school, location, latest } = this.props.data
    const { student, academics } = latest
    return (
      <li key={school.name}>
        <div className="card">
          <TitleBar
            name={school.name}
            schoolUrl={school.school_url}
            studentCount={student.enrollment.all}
          />
          <Content
            location={location}
            academics={academics}
            student={student}
            latest={latest}
          />
        </div>
      </li>
    )
  }
}

export default School
