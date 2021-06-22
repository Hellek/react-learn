import { ReactElement, useState } from 'react'
import { nanoid } from 'nanoid'

import { Item } from '@components/algorithms/Item'

export const SearchLinear = ({ uniqueNumbers }: { uniqueNumbers: number[]}): ReactElement => {
	const [numbers, setNumbers] = useState(uniqueNumbers.map(num => ({ id: nanoid(), num, testing: false, found: false })))

	const [searchValue, setSearchValue] = useState('')

	const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value)
	}

	const search = () => {
		for (let i = 0; i < numbers.length; i++) {
			const numbersCopy = numbers.slice()
			const numObj = numbersCopy[i]
			numObj.testing = true


			if (+searchValue === numObj.num) {
				numObj.found = true
			}

			setNumbers(numbersCopy)

			// numObj.testing = false
		}
	}

	return (
		<div>
			<div className="flex flex-wrap mb-2">
				{numbers.map(n => {
					return (
						<Item
							key={n.id}
							num={n.num}
							testing={n.testing}
							found={n.found}
						/>
					)
				})}
			</div>

			<input
				placeholder="Enter number to search"
				value={searchValue}
				type="number"
				className="mr-2"
				onChange={setValueHandler}
			/>

			<button onClick={search}>Search</button>
		</div>
	)
}
