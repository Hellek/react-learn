import { ReactElement, SetStateAction, useState } from 'react'

const scaleNames = {
	c: 'celsius',
	f: 'fahrenheit',
}

function toCelsius(fahrenheit: string | number): number {
	return (+fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius: string | number): number {
	return (+celsius * 9 / 5) + 32
}

function tryConvert(temperature: string, convert: typeof toCelsius | typeof toFahrenheit): string {
	const input = parseFloat(temperature)
	if (Number.isNaN(input)) return ''

	const output = convert(input)
	const rounded = Math.round(output * 1000) / 1000

	return rounded.toString()
}

function BoilingVerdict(props: { celsius: number }) {
	if (props.celsius >= 100) return <div>hubble-bubble 💦</div>
	return <div>will not boil</div>
}

function TemperatureInput(props: {
	onTemperatureChange: (arg0: string) => void
	scale: 'c' | 'f'
	temperature: string | number
}): ReactElement {
	const handleChange = (e: { target: { value: string } }) => {
		props.onTemperatureChange(e.target.value)
	}

	return (
		<fieldset>
			<legend>{scaleNames[props.scale]}</legend>

			<input value={props.temperature} onChange={handleChange} />
		</fieldset>
	)
}

function Calculator(): ReactElement {
	const [temperature, setTemperature] = useState('')
	const [scale, setScale] = useState('c')

	const handleCelsiusChange = (temp: SetStateAction<string>) => {
		setTemperature(temp)
		setScale('c')
	}

	const handleFahrenheitChange = (temp: SetStateAction<string>) => {
		setTemperature(temp)
		setScale('f')
	}

	const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

	return (
		<fieldset>
			<legend>Enter degrees on the scale</legend>

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
