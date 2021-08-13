import { combineReducers } from 'redux'

import { instrumentsSlice } from './instruments/slice'
import { portfolioSlice } from './portfolio/slice'

export const rootReducer = combineReducers({
	portfolio: portfolioSlice.reducer,
	instruments: instrumentsSlice.reducer,
})
