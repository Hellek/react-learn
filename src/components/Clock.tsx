import { ReactElement, useEffect, useState } from 'react'

function Clock(): ReactElement {
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

function ClockContainer(): ReactElement {
	const [showClock, setShowClock] = useState(false)

	const ShowButton = () => <button onClick={() => { setShowClock(!showClock) }}>{showClock ? 'Hide' : 'Show'} clock</button>

	return (
		<fieldset>
			<legend>Current time</legend>
			<ShowButton />
			{showClock && <Clock />}
		</fieldset>
	)
}

export default ClockContainer
