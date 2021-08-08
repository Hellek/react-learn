import { ReactElement } from 'react'
import cn, { Argument } from 'classnames'

interface Props {
	className?: Argument
}

const ThemeSwitcher = ({ className }: Props): ReactElement => {
	const checkDarkMode = () => {
		if (
			window.matchMedia
			&& window.matchMedia('(prefers-color-scheme: dark)').matches
		) return true
		return false
	}

	const handleDarkTheme = (action: 'enable' | 'disable') => {
		if (action === 'enable') {
			document.documentElement.classList.add('dark')
			return
		}

		document.documentElement.classList.remove('dark')
	}

	if (checkDarkMode()) handleDarkTheme('enable')
	else handleDarkTheme('disable')

	const switchTheme = () => {
		handleDarkTheme(document.documentElement.classList.contains('dark') ? 'disable' : 'enable')
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			className={cn('cursor-pointer', className)}
			strokeWidth="2"
			onClick={switchTheme}
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	)
}

export default ThemeSwitcher
