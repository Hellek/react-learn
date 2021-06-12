import { ReactElement } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Common from '@pages/Common'
import Contacts from '@pages/Contacts'
import Home from '@pages/Home'
import Mobx from '@pages/Mobx'

export const App = (): ReactElement => (
	<Router>
		<Header />

		<main className="flex-1">
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/common' component={Common} />
				<Route exact path='/mobx' component={Mobx} />
				<Route exact path='/contacts' component={Contacts} />
			</Switch>
		</main>

		<Footer />
	</Router>
)
