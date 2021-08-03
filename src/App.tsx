import { ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { routes } from '@router/routes'
import Footer from '@components/Footer'
import Header from '@components/Header'

export const App = (): ReactElement => (
	<Router>
		<Header />

		<main className="flex-1">
			<Switch>{
				routes.map((route, i) => (
					<Route
						key={i}
						exact
						path={route.path}
						component={route.component}
					/>
				))
			}</Switch>
		</main>

		<Footer />
	</Router>
)
