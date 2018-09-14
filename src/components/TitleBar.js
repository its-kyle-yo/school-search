import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faPrint,
  faFile,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons'

const TitleBar = props => {
  const { schoolUrl, name, studentCount } = props
  return (
    <header>
      <h1>
        <a href={`http://${schoolUrl}`}>{name.toUpperCase()}</a>
      </h1>
      <aside>
        <i id="studentIcon">
          <FontAwesomeIcon icon={faUser} />
        </i>
        <span id="fullCount">{studentCount ? studentCount : 'n/a'}</span>
      </aside>
      <nav>
        <button>
          <FontAwesomeIcon icon={faPrint} />
        </button>
        <button>
          <FontAwesomeIcon icon={faFile} />
        </button>
        <button>
          <FontAwesomeIcon icon={faFileCode} />
        </button>
      </nav>
    </header>
  )
}

export default TitleBar
