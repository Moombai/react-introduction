import React from 'react';

// we use {} when we are importing specific exports that are not defaults
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// // We can use the constructor to add new methods to store picker
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this); // find method and bind to store picker
	// }

	// In JavaScript, class methods are not bound by default
	goToStore(event) {
		event.preventDefault(); // regular JavaScript
		
		// first grab the text from the box
		const storeId = this.storeInput.value; // storeInput was added in the render method
		console.log(`Going to ${storeId}`);
		
		// second transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`); // Use Router method in this 'context'
	}

	render() {
		// Render is a method of React.Component and it's 'this' is already bound to Store Picker
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
			  <h2>Please Enter A Store</h2>
			  { /* We can now call the imported getFunName */}
			  <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
			  ref={(input) => { this.storeInput = input } }/>
			  { /* the inline javascript on 'input' adds a reference directly to the class */}
			  <button type="submit">Visit Store</button>
			</form>
		);
	}
}

// Add Router to StorePicker context
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;