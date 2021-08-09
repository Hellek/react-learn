import { ReactElement, ReactNode } from 'react'
import cn, { Argument } from 'classnames'

interface CardProps {
	children?: ReactNode
	className?: Argument
}

export const SimpleCard = ({ children, className }: CardProps): ReactElement => (
	<div className={cn('p-3 mb-4 rounded-lg border-2 border-blue-400', className)}>
		{children}
	</div>
)
