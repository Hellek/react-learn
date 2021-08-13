import { FC, ReactElement,ReactNode, useState } from 'react'
import { Provider } from 'react-redux'
import cn, { Argument } from 'classnames'

import { selectCurrentInstrument, selectInstruments } from './store/instruments/selectors'
import { setInstrument } from './store/instruments/slice'
import { useAppDispatch, useAppSelector } from './store/portfolio/hooks'
import { selectPositions } from './store/portfolio/selectors'
import { trade } from './store/portfolio/slice'
import { store } from './store/store'

interface CardProps {
	title: string,
	children: ReactNode
	className?: Argument
}

export const Card = ({ title, children, className }: CardProps): ReactElement => (
	<code className={cn('px-5 py-3 inline-block', className)}>
		<div className="mb-3 font-bold text-md">{title}</div>
		<div>{children}</div>
	</code>
)

export const Portfolio = (): ReactElement => {
	const positions = useAppSelector(selectPositions)

	return <Card title="Portfolio">
		<div className="flex mb-2 border-b">
			<div className="w-20">ticker</div>
			<div className="w-28">lots</div>
			<div className="w-14 text-right">price</div>
		</div>

		{Object.keys(positions).map(ticker => (
			<div
				key={ticker}
				className="flex mb-1"
			>
				<div className="w-20">{ticker}</div>
				<div className="w-28">{positions[ticker].lots}</div>
				<div className="w-14 text-right">{positions[ticker].averagePrice.toPrecision(3)}</div>
			</div>
		))}
	</Card>
}

export const Trades: FC = () => {
	const { name, ticker } = useAppSelector(selectCurrentInstrument)
	const dispatch = useAppDispatch()
	const [price, setPrice] = useState(0)
	const [lots, setLots] = useState(0)

	if (!ticker) return <Card title="Trades">Choose instrument</Card>

	return (
		<Card title="Trades">
			<div className="mb-4">{name}</div>

			<div className="mb-2">
				<label className="mr-2">
					<span className="label">lots</span>

					<input
						type="text"
						value={lots}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							const res = +e.target.value

							if (!Number.isNaN(res) && res > 0) setLots(res)
						}}
					/>
				</label>

				<label>
					<span className="label">price</span>

					<input
						type="text"
						value={price}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							const res = +e.target.value

							if (!Number.isNaN(res) && res > 0) setPrice(res)
						}}
					/>
				</label>
			</div>

			<div className="flex">
				<button className="flex-1 mr-2" onClick={() => { dispatch(trade( { operation: 'buy', name, ticker, price, lots })) }}>buy</button>
				<button className="flex-1" onClick={() => { dispatch(trade({ operation: 'sell', name, ticker, price, lots })) }}>sell</button>
			</div>
		</Card>
	)
}

interface InstrumentsProps {
	className?: Argument
}

export const Instruments = ({ className }: InstrumentsProps): ReactElement => {
	const instruments = useAppSelector(selectInstruments)
	const dispatch = useAppDispatch()

	const setTicker = (ticker: string) => {
		dispatch(setInstrument({ ticker }))
	}

	return (
		<Card title="Instruments" className={cn(className)}>
			<div className="flex mb-2 border-b">
				<div className="w-20">ticker</div>
				<div className="w-28">name</div>
				<div className="w-14 text-right">price</div>
			</div>

			{instruments.map(pos => (
				<div
					key={pos.ticker}
					className="flex mb-1 cursor-pointer hover:text-white"
					onClick={() => setTicker(pos.ticker)}
				>
					<div className="w-20">{pos.ticker}</div>
					<div className="w-28">{pos.name}</div>
					<div className="w-14 text-right">{pos.price}$</div>
				</div>
			))}
		</Card>
	)
}

export const StockTerminal: FC = () => {
	return (
		<Provider store={store}>
			<div className="flex mb-4">
				<Instruments className="mr-4"/>
				<Trades />
			</div>
			<Portfolio />
		</Provider>
	)
}

export default StockTerminal
