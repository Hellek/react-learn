import { ReactElement, ReactNode } from 'react'

interface CardProps {
	children?: ReactNode
}

export const SimpleCard = ({ children }: CardProps): ReactElement => (
	<div className="p-3 mb-4 rounded-lg border-2 border-blue-400">
		{children}
	</div>
)
