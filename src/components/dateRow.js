import React from 'react'
import dayjs from 'dayjs'

import MapIcon from './mapIcon'
import Komoot from './komoot'

class DateRow extends React.Component {
  state = {
    popUp: false,
  }
  togglePopUp = () => {
    this.setState({
      popUp: !this.state.popUp,
    })
  }
  render() {
    const { data, number } = this.props
    return (
      <div className="date-row">
        <div className="row">
          <span className={`number ${data.highlight ? 'highlight' : ''}`}>
            #{number}
          </span>
          <span className="date">
            <span>{dayjs(data.date).format('DD.MM.YYYY')}</span>
            <span className={`relative ${data.highlight ? 'trigger' : ''}`}>
              {dayjs(data.date).fromNow()}
            </span>
            <img
              src="https://media.giphy.com/media/DyAX4OUDFz4uk/giphy.gif"
              className="brad"
            />
          </span>
          <span className="route">{data.route}</span>
        </div>
        <div className="row">
          <span className="distance">{`${data.distance / 1000} km`}</span>
          <button className="komoot" onClick={this.togglePopUp}>
            <MapIcon />
          </button>
        </div>
        {this.state.popUp && (
          <Komoot id={data.komootId} onClose={this.togglePopUp} />
        )}
      </div>
    )
  }
}

export default DateRow
