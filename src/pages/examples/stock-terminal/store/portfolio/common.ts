export interface Position {
	name: string
	ticker: string
	averagePrice: number
	lots: number
}

export type Positions = Record<string, Position>

export interface Portfolio {
	positions: Positions
}

export const initialState: Portfolio = {
	positions: {},
}
