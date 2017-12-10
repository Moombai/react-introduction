import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	// We cannot use 'this' in a constructor until we call super(), which will initialise React.Component
	// constructor allows us to add methods to the new App instance
	constructor(){
		// super() allows us to add new methods to our App component
		// The render() method belongs to the React.Component class
		super();

		// bind addFish method to App
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);

		// Initial state
		this.state = {
			fishes: {},
			order: {}
		};
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

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
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
								.map(key => <Fish key={key} details={this.state.fishes[key]} />)
						}
					</ul>
				</div>
				<Order />
				{/* pass the add fish method down to inventory as a prop */}
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		);
	}
}

export default App;