export interface Course {
	name: string
	resource: string
	href?: string
	date?: string
}

export interface Skill {
	name: string
}

export const courses = [
	{
		name: 'Vue.js',
		resource: 'learn.javascript.ru',
		href: 'https://learn.javascript.ru/courses/vue',
		date: '2017',
	},
	{
		name: 'Design with Tailwind CSS Masterclass',
		resource: 'EggHead.io',
		href: 'https://egghead.io/courses/design-with-tailwind-css-masterclass-f0db',
		date: '2021',
	},
]

export const skills = [
	{
		name: 'Vue',
	},
	{
		name: 'React',
	},
]
