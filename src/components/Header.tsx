import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (): ReactElement => (
	<header className="bg-gray-900">
		<NavLink
			to={'/'}
			exact
		>Home</NavLink>

		<NavLink
			to={'/common'}
			exact
		>Common</NavLink>

		<NavLink
			to={'/mobx'}
			exact
		>Mobx</NavLink>

		<NavLink
			to={'/contacts'}
			exact
		>Contacts</NavLink>
	</header>
)

export default Header
