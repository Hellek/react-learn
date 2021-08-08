import { ReactElement } from 'react'
import cn, { Argument } from 'classnames'

interface Props {
	className?: Argument
}

export const isWindowPrefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const setThemeHtmlClass = (theme: 'dark' | 'light'): void => {
	document.documentElement.classList.add(theme)
	document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark')
	localStorage.setItem('theme', theme)
}

export const themeAutoDetect = (): void => {
	const cachedTheme = localStorage.getItem('theme')

	if (cachedTheme) setThemeHtmlClass(cachedTheme as 'dark' | 'light')
	else if (isWindowPrefersDarkScheme) setThemeHtmlClass('dark')
	else setThemeHtmlClass('light')
}

const toggleTheme = () => {
	setThemeHtmlClass(document.documentElement.classList.contains('dark') ? 'light' : 'dark')
}

const ThemeSwitcher = ({ className }: Props): ReactElement => {
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
			onClick={toggleTheme}
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	)
}

export default ThemeSwitcher
