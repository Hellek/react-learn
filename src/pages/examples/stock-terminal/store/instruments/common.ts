export interface Instrument {
	name: string
	ticker: string
	price: number
}

export interface Instruments {
	instrument: Instrument | Record<string, never>
	instruments: Instrument[]
}

export const initialState: Instruments = {
	instrument: {},
	instruments: [
		{
			name: 'Tesla',
			ticker: 'TSLA',
			price: 700,
		},
		{
			name: 'Moderna',
			ticker: 'MRNA',
			price: 440,
		},
		{
			name: 'Amazon',
			ticker: 'AMZN',
			price: 4400,
		},
		{
			name: 'Facebook',
			ticker: 'FB',
			price: 340,
		},
	],
}
