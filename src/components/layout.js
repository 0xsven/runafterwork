import React from 'react'
import PropTypes from 'prop-types'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

import './layout.css'

dayjs.extend(relativeTime)

class Link extends React.Component {
  state = {
    open: false,
  }
  componentDidMount() {
    const img = new Image()
    img.src = this.props.href
  }
  handleMouseEnter = () => {
    this.setState({ open: true })
  }
  handleMouseLeave = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <>
        <a
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link trigger"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.props.title}
        </a>
        {this.state.open && (
          <img src={this.props.imageUrl} className="brad top" />
        )}
      </>
    )
  }
}

const Layout = ({ children }) => (
  <div className="page">
    <header className="container">
      <h1 className="trigger">Run After Working</h1>
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
      <Link
        title="Sven"
        imageUrl="https://media.giphy.com/media/3ohzdT5WfQC4G2FSiQ/giphy.gif"
        href="https://www.strava.com/athletes/23128421"
      />
      ,{' '}
      <Link
        title="Onno"
        imageUrl="https://media.giphy.com/media/l4FGDvIpoiwBaQYMg/giphy.gif"
        href="https://www.strava.com/athletes/24667421"
      />
      .
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
