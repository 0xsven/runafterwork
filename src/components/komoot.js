import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    document.body.appendChild(this.el)
  }
  componentWillUnmount() {
    document.body.removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

const Komoot = ({ id, onClose }) => (
  <Modal>
    <div className="backdrop">
      <div className="modal">
        <iframe
          title="map"
          src={`https://www.komoot.de/tour/${id}/embed`}
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
        />
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  </Modal>
)

export default Komoot
