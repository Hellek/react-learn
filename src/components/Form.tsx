import { ReactElement } from 'react'
import { useState } from 'react'

import { capitalize } from '../utils'

interface Fruits {
	[key: string]: { icon: string }
}

const fruits: Fruits = {
	lemon: { icon: '🍋' },
	coconut: { icon: '🥥' },
	banana: { icon: '🍌' },
	strawberry: { icon: '🍓' },
	kiwi: { icon: '🥝' },
}

function Form(): ReactElement {
	const [firstName, setFirstName] = useState('Roman')
	const [text, setText] = useState('Est duis magna do nisi et labore magna cupidatat cillum laborum.')
	const [fruit, setFruit] = useState('banana')

	return (
		<fieldset>
			<legend>Form</legend>

			<div style={{ margin: '0 0 5px' }}>Entered name:  {firstName || 'unknown'}</div>
			<input
				name="firstName"
				type="text"
				value={firstName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setFirstName(e.target.value)}}
			/>

			<div style={{ margin: '10px 0 5px' }}>Edit text:  {text || 'unknown'}</div>
			<textarea
				name="text"
				value={text}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setText(e.target.value)}}
			/>

			<div style={{ margin: '8px 0 5px' }}>Choose fruit:  {fruits[fruit].icon || 'unknown'}</div>
			<select
				name="fruit"
				value={fruit}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setFruit(e.target.value)}}
			>
				{Object.keys(fruits).map(name => {
					return <option value={name} key={name}>{fruits[name].icon} { capitalize(name)}</option>
				})}
			</select>
		</fieldset>
	)
}

export default Form
