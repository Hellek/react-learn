import { FC } from 'react'

import { SimpleCard } from '@ui/SimpleCard'
import ReduxToolkit from '@components/redux/ReduxToolkit'
import ReduxSimple from '@components/redux/Simple'

export const ReduxPage: FC = () => {
	return (
		<div className="flex">
			<SimpleCard className="mr-4">
				<ReduxSimple />
			</SimpleCard>

			<SimpleCard>
				<ReduxToolkit />
			</SimpleCard>
		</div>
	)
}

export default ReduxPage
