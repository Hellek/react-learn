import { ReactElement } from 'react'
import cn from 'classnames'

interface ItemProps {
	num: number
	testing: boolean
	found: boolean
}

export const Item = ({ num, testing, found }: ItemProps): ReactElement => {
	return (
		<div
			key={num}
			className={cn('p-2 m-1 bg-gray-600', {
				'bg-green-600': found,
				'bg-purple-600': !found && testing,
			})}
		>{num}</div>
	)
}
