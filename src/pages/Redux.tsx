import { FC } from 'react'

import ReduxToolkit from '@components/redux/ReduxToolkit'
import ReduxSimple from '@components/redux/Simple'

export const ReduxPage: FC = () => {
	return (
		<div className="flex">
			<ReduxSimple />
			<div className="mr-5" />
			<ReduxToolkit />
		</div>
	)
}

export default ReduxPage
