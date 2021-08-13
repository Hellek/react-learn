import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './common'

export const instrumentsSlice = createSlice({
	name: 'instruments',
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		setInstrument: (state, action: PayloadAction<{ ticker: string }>) => {
			const instrument = state.instruments.find(i => i.ticker === action.payload.ticker) || {}

			state.instrument = instrument
			// state.value += action.payload
		},
		/*
		sell: (state, action: PayloadAction<number>) => {
			state.positions = [
				...state.positions,
				{
					name: 'string123',
					ticker: 'string123',
					balance: 55,
					lots: action.payload,
				},
			]
			// state.value += action.payload
		}, */
	},
})

export const { setInstrument } = instrumentsSlice.actions
