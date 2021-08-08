import { FC } from 'react'
import { Provider } from 'react-redux'

import { useAppDispatch,useAppSelector } from './ReduxToolkit.hooks'
import { decrease, increase } from './ReduxToolkit.slice'
import { store } from './ReduxToolkit.store'

export const CounterComponent: FC = () => {
	const timesClicked = useAppSelector(state => state.timesClicked)
	const value = useAppSelector(state => state.value)
	const dispatch = useAppDispatch()

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
