export interface ReduxAction {
	type: string;
	payload?: any;
}

export interface State {
	timesClicked: number
	value: number
}

export const initialState = {
	timesClicked: 0,
	value: 0,
}
