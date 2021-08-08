import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import { routes } from '@router/routes'
import ThemeSwitcher from '@components/ThemeSwitcher'

const Header = (): ReactElement => (
	<header className="flex justify-between items-center">
		<div>
			{routes.map((route, i) => (
				<NavLink
					key={i}
					to={route.path}
					exact
				>{route.label}</NavLink>
			))}
		</div>

		<ThemeSwitcher className="mr-4"/>
	</header>
)

export default Header
