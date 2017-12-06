import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
			  { /* This is a Valid React JS Comment */}
			  { /* Comments cannot be placed on the first line of a return statement */}
			  <h2>Please Enter A Store</h2>
			  <input type="text" required placeholder="Store Name" />
			  <button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;