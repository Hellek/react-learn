import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'

class LocalStore {
  value = 0
  timesClicked = 0

  constructor() {
  	makeAutoObservable(this)
  }

  increase() {
  	this.value++
  	this.timesClicked++
  }

  decrease() {
  	this.value--
  	this.timesClicked++
  }
}

const StoreInstance = new LocalStore()

export const MobxPage = observer(() => {
	return (
		<div>
			<div className="mb-2">Times clicked: {StoreInstance.timesClicked}</div>
			<div className="mb-2">Balance: {StoreInstance.value}</div>
			<button className="mb-2 mr-2" onClick={() => { StoreInstance.increase() }}>Increase</button>
			<button className="mb-2" onClick={() => { StoreInstance.decrease() }}>Decrease</button>
		</div>
	)
})

export default MobxPage
