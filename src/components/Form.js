import React from 'react'

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: 'Roman',
			text: 'Est duis magna do nisi et labore magna cupidatat cillum laborum.',
			fruit: 'coconut',
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		return (
			<fieldset>
				<legend>Форма</legend>

				<div>Ваше имя:  {this.state.firstName || 'не указано'}</div>
				<input
					name="firstName"
					type="text"
					value={this.state.firstName}
					onInput={this.handleChange}
				/>

				<div style={{ marginTop: '10px' }}>Ваш текст:  {this.state.text || 'не указан'}</div>
				<textarea
					name="text"
					value={this.state.text}
					onInput={this.handleChange}
				/>

				<div style={{ marginTop: '10px' }}>Ваш фрукт:  {this.state.fruit || 'не указан'}</div>
				<select
					name="fruit"
					value={this.state.fruit}
					onChange={this.handleChange}
				>
					<option value="grapefruit">Грейпфрут</option>
					<option value="lime">Лайм</option>
					<option value="coconut">Кокос</option>
					<option value="mango">Манго</option>
				</select>
			</fieldset>
		)
	}
}

export default Form
