import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => clearTimeout(timerID)
  })

  return (
    <div style={{ marginTop: '10px' }}>
      {time.toLocaleTimeString()}
    </div>
  )
}

function ClockContainer() {
  const [showClock, setShowClock] = useState(false)

  const ShowButton = () => <button onClick={() => { setShowClock(!showClock) }}>{showClock ? 'Скрыть' : 'Показать'} часы</button>

  return (
    <fieldset>
      <legend>Текущее время</legend>
      <ShowButton />
      {showClock && <Clock />}
    </fieldset>
  )
}

export default ClockContainer
