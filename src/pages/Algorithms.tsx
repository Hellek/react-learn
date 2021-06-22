import { ReactElement } from 'react'

import { SimpleCard } from '@ui/SimpleCard'
import { SearchLinear } from '@components/algorithms/SearchLinear'
import { SortBubble } from '@components/algorithms/SortBubble'

const uniqueNumbers = [99, 88, 77, 66, 55, 44, 33, 22, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const algoList = [
	{
		label: 'Linear search',
		component: <SearchLinear uniqueNumbers={uniqueNumbers} />,
	},
	{
		label: 'Bubble sort',
		component: <SortBubble />,
	},
]

const Algorithms = (): ReactElement => (
	<div>
		{algoList.map((al, i) => (
			<SimpleCard
				key={i}
			>
				<div className="mb-3">{al.label}</div>
				<div>{al.component}</div>
			</SimpleCard>
		))}
	</div>
)

export default Algorithms
