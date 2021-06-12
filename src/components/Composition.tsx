import { ReactElement } from 'react'

function Block1(): ReactElement {
	return (
		<div>Block1, yo!</div>
	)
}

function Block2(): ReactElement {
	return (
		<div>Block2, yo!</div>
	)
}

function FancyBorder(props: { firstEl: any, secondEl: any }): ReactElement {
	return (
		<fieldset>
			<legend>Composition</legend>
			{ props.firstEl }
			{ props.secondEl }
		</fieldset>
	)
}

function WelcomeDialog(): ReactElement {
	return (
		<FancyBorder
			firstEl={<Block1 />}
			secondEl={<Block2 />}
		/>
	)
}

export default WelcomeDialog
