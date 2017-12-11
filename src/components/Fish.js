import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const details = this.props.details; // possible to use destructuring to shorten syntax
		const index = this.props.index;
		const isAvailable = ( details.status === 'available' );
		const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';

		return (
			<li className="menu-fish">
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				{/* On click we use the fat arrow syntax to capture the addToOrder argument */}
				<button disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>{ buttonText }</button>
			</li>
		)
	}
}

export default Fish;