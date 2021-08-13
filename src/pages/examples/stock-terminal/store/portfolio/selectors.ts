import type { RootState } from '../store'
import { Position, Positions } from './common'

export const selectPositions = (state: RootState): Positions => state.portfolio.positions

export const selectPosition = (state: RootState, ticker: string): Position => state.portfolio.positions[ticker]
