import React from 'react';

/** Example of stateless functional component this function will not change dynamically
	or contain methods besides render so there is no need to extend from React Component
**/
const Header = (props) => {
	return (
		<header className="top">
			<h1>
				Catch
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
				Day
			</h1>
			{/* Example of accessing props in a component class */}
			<h3 className="tagline"><span>{props.tagline}</span></h3>
		</header>
	);
}



export default Header;