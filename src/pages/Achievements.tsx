import { ReactElement } from 'react'

import { CourseItem, SkillItem } from '@components/achievements/Items'
import { Course, courses, Skill, skills } from '@data/personal'

const Achievements = (): ReactElement => (
	<div>
		<div className="text-xl font-semibold mb-5">Learned courses</div>

		{courses.map((course: Course, i) => <CourseItem key={i} course={course} />)}

		<div className="text-xl font-semibold mb-5 mt-10">My skills</div>

		{skills.map((skill: Skill, i) => <SkillItem key={i} skill={skill} />)}
	</div>
)

export default Achievements
