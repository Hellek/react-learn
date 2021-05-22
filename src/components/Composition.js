import React from 'react'

function Block1() {
	return (
		<div>Block1, yo!</div>
	)
}

function Block2() {
	return (
		<div>Block2, yo!</div>
	)
}

function FancyBorder(props) {
	return (
		<fieldset>
			<legend>Composition</legend>
			{ props.firstEl }
			{ props.secondEl }
		</fieldset>
	)
}

function WelcomeDialog() {
	return (
		<FancyBorder
			firstEl={<Block1 />}
			secondEl={<Block2 />}
		/>
	)
}

export default WelcomeDialog
