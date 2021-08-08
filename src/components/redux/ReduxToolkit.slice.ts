import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './common'
import type { RootState } from './ReduxToolkit.store'

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increase: state => {
			state.timesClicked += 1
			state.value += 1
		},
		decrease: state => {
			state.timesClicked += 1
			state.value -= 1
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
})

export const { increase, decrease, incrementByAmount } = counterSlice.actions


export const selectTimesClicked = (state: RootState): number => state.timesClicked
export const selectValue = (state: RootState): number => state.value

export default counterSlice.reducer
