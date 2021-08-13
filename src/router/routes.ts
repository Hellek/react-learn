import Achievements from '@pages/Achievements'
import Contacts from '@pages/Contacts'
// import Algorithms from '@pages/Algorithms'
import Exampes from '@pages/examples/Exampes'
import StockTerminal from '@pages/examples/stock-terminal/StockTerminal'
import Home from '@pages/Home'
import Mobx from '@pages/Mobx'
import Redux from '@pages/Redux'

export const routes = [
	{
		path: '/',
		component: Home,
		label: 'Home',
	},
	{
		path: '/achievements',
		component: Achievements,
		label: 'Achievements',
	},
	/* {
		path: '/algorithms',
		component: Algorithms,
		label: 'Algorithms',
	}, */
	{
		path: '/exampes',
		component: Exampes,
		label: 'Exampes',
	},
	{
		path: '/exampes/stock-terminal',
		component: StockTerminal,
		label: 'StockTerminal',
	},
	{
		path: '/mobx',
		component: Mobx,
		label: 'Mobx',
	},
	{
		path: '/redux',
		component: Redux,
		label: 'Redux',
	},
	{
		path: '/contacts',
		component: Contacts,
		label: 'Contacts',
	},
]
