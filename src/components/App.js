import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
	// We cannot use 'this' in a constructor until we call super(), which will initialise React.Component
	// constructor allows us to add methods to the new App instance
	constructor(){
		// super() allows us to add new methods to our App component
		// The render() method belongs to the React.Component class
		super();

		// bind addFish method to App
		this.addFish = this.addFish.bind(this);
		this.removeFish = this.removeFish.bind(this);
		this.removeOrder = this.removeOrder.bind(this);
		this.updateFish = this.updateFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);

		// Initial state
		this.state = {
			fishes: {},
			order: {}
		};
	}

	componentWillMount() {
		// this runs right before the <App> is rendered
		this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});

		//check if there is any order in localStorage
		const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

		if(localStorageRef) {
			// update our App components order state
			this.setState({
				order: JSON.parse(localStorageRef)
			})
		}
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	// Object state and props after  they've been updated
	componentWillUpdate(nextProps, nextState) {
		//local storage cannot accept objects so we store our value as a JSON string
		localStorage.setItem(`order-${this.props.params.storeId}`,
			JSON.stringify(nextState.order));
	}

	addFish(fish) {
		// update our state
		const fishes = {...this.state.fishes}; // make copy of fishes state
		// add in our new fish
		const timestamp = Date.now();
		  /** Add new fish state to existing state with time stamp  **/
		fishes[`fish-${timestamp}`] = fish;
		// set state 
		/** On calling setState(), React will re-render the UI! **/
		this.setState({ fishes: fishes }); // alternative input: ({ fishes })
	}

	updateFish(key, updatedFish) {
		const fishes = {...this.state.fishes};
		fishes[key] = updatedFish;
		this.setState({ fishes: fishes });
	}

	removeFish(key) {
		const fishes = {...this.state.fishes};
		// syntax to remove key in firbase 
		fishes[key] = null;
		this.setState({ fishes: fishes });
	}

	removeOrder(key) {
		const order = {...this.state.order};
		// not limited by firebase this time
		delete order[key];
		this.setState({ order })
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	addToOrder(key) {
		// take copy of our state
		const order = {...this.state.order};
		// update or add the new number of fish ordered
		order[key] = order[key] + 1 || 1;
		// update state
		this.setState({ order: order }); // alternative syntax ({ order }) #destructuring!
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="list-of-fishes">
						{
							Object
								.keys(this.state.fishes)
								.map(key => <Fish key={key} index={key} details={this.state.fishes[key]}
									addToOrder={this.addToOrder}/>)
						}
					</ul>
				</div>
				<Order
					fishes={this.state.fishes}
					order={this.state.order}
					params={this.props.params}
					removeOrder={this.removeOrder}
				/>
				{/* pass the add fish method down to inventory as a prop */}
				<Inventory 
					addFish={this.addFish} 
					loadSamples={this.loadSamples}
					fishes={this.state.fishes}
					updateFish={this.updateFish}
					removeFish={this.removeFish}
				/>
			</div>
		);
	}
}

App.propTypes = {
	params: React.PropTypes.object.isRequired
}

export default App;