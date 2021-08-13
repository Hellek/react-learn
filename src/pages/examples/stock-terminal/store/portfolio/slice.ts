import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './common'

interface TradeAction {
	operation: 'buy' | 'sell'
	name: string
	ticker: string
	price: number
	lots: number
}

export const portfolioSlice = createSlice({
	name: 'portfolio',
	initialState,
	reducers: {
		trade: (state, action: PayloadAction<TradeAction>) => {
			const { operation, ticker, price, lots } = action.payload

			const foundPosition = state.positions[ticker]

			if (foundPosition) {
				const oldPositionPrice = foundPosition.averagePrice * foundPosition.lots
				const tradePositionPrice = price * lots
				let totalPositionPrice = 0

				if (operation === 'buy') {
					foundPosition.lots += lots
					totalPositionPrice = oldPositionPrice + tradePositionPrice
				} else {
					foundPosition.lots -= lots
					totalPositionPrice = oldPositionPrice - tradePositionPrice
				}

				foundPosition.averagePrice = Math.abs(totalPositionPrice / foundPosition.lots)

				if (foundPosition.lots === 0) {
					delete state.positions[ticker]
				} else {
					state.positions[ticker] = foundPosition
				}
			} else {
				state.positions[ticker] = {
					name: ticker,
					ticker,
					averagePrice: price,
					lots: operation === 'buy' ? lots : -lots,
				}
			}
		},
	},
})

export const { trade } = portfolioSlice.actions
