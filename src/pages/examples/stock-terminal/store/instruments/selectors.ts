import type { RootState } from '../store'
import { Instrument } from './common'

export const selectInstruments = (state: RootState): Instrument[] => state.instruments.instruments

export const selectCurrentInstrument = (state: RootState): Instrument | Record<string, never> => state.instruments.instrument
