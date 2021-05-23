import React, { useState } from 'react'

const scaleNames = {
	c: 'цельсия',
	f: 'фаренгейта',
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature)
	if (Number.isNaN(input)) return ''

	const output = convert(input)
	const rounded = Math.round(output * 1000) / 1000

	return rounded.toString()
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) return <div>Вода закипит</div>
	return <div>Вода не закипит</div>
}

function TemperatureInput(props) {
	const handleChange = e => {
		props.onTemperatureChange(e.target.value)
	}

	return (
		<fieldset>
			<legend>{scaleNames[props.scale]}</legend>

			<input value={props.temperature} onChange={handleChange} />
		</fieldset>
	)
}

function Calculator(props) {
	const [temperature, setTemperature] = useState('')
	const [scale, setScale] = useState('c')

	const handleCelsiusChange = temp => {
		setTemperature(temp)
		setScale('c')
	}

	const handleFahrenheitChange = temp => {
		setTemperature(temp)
		setScale('f')
	}

	const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

	return (
		<fieldset>
			<legend>Введите градусы по шкале</legend>

			<TemperatureInput
				scale="c"
				temperature={celsius}
				onTemperatureChange={handleCelsiusChange}
			/>

			<TemperatureInput
				scale="f"
				temperature={fahrenheit}
				onTemperatureChange={handleFahrenheitChange}
			/>

			<BoilingVerdict celsius={parseFloat(celsius)} />
		</fieldset>
	)
}

export default Calculator
