import Achievements from '@pages/Achievements'
import Algorithms from '@pages/Algorithms'
import Common from '@pages/Common'
import Contacts from '@pages/Contacts'
import Home from '@pages/Home'
import Mobx from '@pages/Mobx'

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
	{
		path: '/algorithms',
		component: Algorithms,
		label: 'Algorithms',
	},
	{
		path: '/common',
		component: Common,
		label: 'Common',
	},
	{
		path: '/mobx',
		component: Mobx,
		label: 'Mobx',
	},
	{
		path: '/contacts',
		component: Contacts,
		label: 'Contacts',
	},
]