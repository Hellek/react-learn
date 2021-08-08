export interface Course {
	name: string
	resource: string
	href?: string
	date?: string
}

export interface Skill {
	name: string
	items: string[]
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
		items: [
			'vue v2',
			'vue v3',
			'vuex',
			'vue-router',
		],
	},
	{
		name: 'JavaScript',
		items: [
			'TypeScript',
			'Promise',
			'async/await',
			'rest/spread operators',
			'template literals',
		],
	},
	{
		name: 'Node.js',
		items: [
			'express',
			'koa',
			'pg',
		],
	},
	{
		name: 'React',
		items: [
			'redux',
			'mobx-react-lite',
			'react-router',
			'@reduxjs/toolkit',
		],
	},
	{
		name: 'CSS',
		items: [
			'flexbox',
			'grids',
			'tailwind',
			'themization',
		],
	},
	{
		name: 'GIT',
		items: [
			'merge',
			'rebase',
			'fast-forward',
			'revert',
			'cherry pick',
			'reset',
		],
	},
	{
		name: 'CI/DI',
		items: [
			'heroku',
			'vercel',
			'drone.ci',
			'github pages',
			'gitlab',
		],
	},
]
