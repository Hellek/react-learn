import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import { routes } from '@router/routes'

const Header = (): ReactElement => (
	<header className="bg-gray-900">
		{routes.map((route, i) => (
			<NavLink
				key={i}
				to={route.path}
				exact
			>{route.label}</NavLink>
		))}
	</header>
)

export default Header
