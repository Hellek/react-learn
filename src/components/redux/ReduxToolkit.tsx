import { FC } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

import { configureStore, createSlice } from '@reduxjs/toolkit'
import { initialState, State } from './common'

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
	},
})

const { increase, decrease } = counterSlice.actions

const store = configureStore({
	reducer: counterSlice.reducer,
})

store.subscribe(() => console.info(store.getState()))

export const CounterComponent: FC = () => {
	const timesClicked = useSelector((state: State) => state.timesClicked)
	const value = useSelector((state: State) => state.value)
	const dispatch = useDispatch()

	return (
		<div>
			<code className="mb-1 inline-block">@reduxjs/toolkit</code>
			<div className="mb-2">Times clicked: {timesClicked}</div>
			<div className="mb-2">Balance: {value}</div>
			<button className="mb-2 mr-2" onClick={() => { dispatch(increase()) }}>Increase</button>
			<button className="mb-2" onClick={() => { dispatch(decrease()) }}>Decrease</button>
		</div>
	)
}

export const ReduxToolkit: FC = () => {
	return (
		<Provider store={store}>
			<CounterComponent />
		</Provider>
	)
}

export default ReduxToolkit
