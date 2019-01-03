import React from 'react'
import PropTypes from 'prop-types'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

import './layout.css'

dayjs.extend(relativeTime)

const Layout = ({ children }) => (
  <div className="page">
    <header className="container">
      <h1>Run After Working</h1>
      <img
        src="https://media.giphy.com/media/KBCxijnlSs9jy/giphy.gif"
        className="brad"
        alt="brad dancing"
      />
      <p className="description">
        We meet every Wednesday 8pm to run in Berlin. Routes and distances will
        be announced at least one week in advance.
      </p>
    </header>
    <div className="container">{children}</div>
    <footer>
      Connect with us on Strava:{' '}
      <a
        href="https://www.strava.com/athletes/23128421"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        Sven
      </a>
      ,{' '}
      <a
        href="https://www.strava.com/athletes/24667421"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        Onno
      </a>
      .
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
