import { ReactElement } from 'react'

import { SimpleCard } from '@components/achievements/SimpleCard'
import { Course, Skill } from '@data/personal'

export const CourseItem = ({ course }: { course: Course }): ReactElement => (
	<SimpleCard>
		<div>{course.name}</div>
		<div className="text-xs">
			{course.href ?
				<a href={course.href} className="text-blue-400" target="_blank" rel="noopener noreferrer">{course.resource}</a>
				: <div className="text-gray-400">{course.resource}</div>
			}
		</div>
		<div className="text-10 mt-1 text-gray-400">{course.date}</div>
	</SimpleCard>
)

export const SkillItem = ({ skill }: { skill: Skill }): ReactElement => (
	<SimpleCard>
		<div>{skill.name}</div>
	</SimpleCard>
)
