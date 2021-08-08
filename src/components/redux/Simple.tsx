import { FC } from 'react'
import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'

import { initialState, ReduxAction, State } from './common'

const counterReducer = function (state: State = initialState, action: ReduxAction) {
	switch (action.type) {
	case 'counter/increase':
		return { value: state.value + 1, timesClicked: state.timesClicked + 1 }
	case 'counter/decrease':
		return { value: state.value - 1, timesClicked: state.timesClicked + 1 }
	default:
		return state
	}
}


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(counterReducer)

store.subscribe(() => console.info(store.getState()))

const CounterComponent: FC = () => {
	const timesClicked = useSelector((state: State) => state.timesClicked)
	const value = useSelector((state: State) => state.value)

	return (
		<div>
			<code className="mb-1 inline-block">react-redux</code>
			<div className="mb-2">Times clicked: {timesClicked}</div>
			<div className="mb-2">Balance: {value}</div>
			<button className="mb-2 mr-2" onClick={() => { store.dispatch({ type: 'counter/increase' }) }}>Increase</button>
			<button className="mb-2" onClick={() => { store.dispatch({ type: 'counter/decrease' }) }}>Decrease</button>
		</div>
	)
}

export const ReduxSimple: FC = () => {
	return (
		<Provider store={store}>
			<CounterComponent />
		</Provider>
	)
}

export default ReduxSimple
