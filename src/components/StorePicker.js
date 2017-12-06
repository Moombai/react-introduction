import React from 'react';

// we use {} when we are importing specific exports that are not defaults
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
			  { /* This is a Valid React JS Comment */}
			  { /* Comments cannot be placed on the first line of a return statement */}
			  <h2>Please Enter A Store</h2>
			  { /* We can now call the imported getFunName */}
			  <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
			  <button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;