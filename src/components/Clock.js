import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <fieldset>
        <legend>Текущее время</legend>
        {this.state.time.toLocaleTimeString()}
      </fieldset>
    )
  }
}

export default Clock
