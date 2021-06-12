import { ReactElement } from 'react'

import Calculator from '@components/Calculator'
import Clock from '@components/Clock'
import Composition from '@components/Composition'
import Form from '@components/Form'
import Users from '@components/Users'

const Home = (): ReactElement => (
	<div>
		<Clock />
		<Users />
		<Form />
		<Calculator />
		<Composition />
	</div>
)

export default Home
