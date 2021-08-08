import { FC } from 'react'

import ReduxSimple from '@components/redux/Simple'

export const ReduxPage: FC = () => {
	return (
		<div className="flex">
			<ReduxSimple />
			<div className="mr-5" />
		</div>
	)
}

export default ReduxPage
