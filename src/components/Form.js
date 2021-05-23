import { useState } from 'react'

function Form() {
	const [firstName, setFirstName] = useState('Roman')
	const [text, setText] = useState('Est duis magna do nisi et labore magna cupidatat cillum laborum.')
	const [fruit, setFruit] = useState('coconut')

	return (
		<fieldset>
			<legend>Форма</legend>

			<div>Ваше имя:  {firstName || 'не указано'}</div>
			<input
				name="firstName"
				type="text"
				value={firstName}
				onInput={e => {setFirstName(e.target.value)}}
			/>

			<div style={{ marginTop: '10px' }}>Ваш текст:  {text || 'не указан'}</div>
			<textarea
				name="text"
				value={text}
				onInput={e => {setText(e.target.value)}}
			/>

			<div style={{ marginTop: '10px' }}>Ваш фрукт:  {fruit || 'не указан'}</div>
			<select
				name="fruit"
				value={fruit}
				onChange={e => {setFruit(e.target.value)}}
			>
				<option value="grapefruit">Грейпфрут</option>
				<option value="lime">Лайм</option>
				<option value="coconut">Кокос</option>
				<option value="mango">Манго</option>
			</select>
		</fieldset>
	)
}

export default Form
