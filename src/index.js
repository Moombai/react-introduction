import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

// uses webpack to compile the contents of the file and add a style tag in this location
import './css/style.css';

// we must add the relative path so that Node does not look in the Node modules folder 
import App from './components/App';
import NotFound from './components/NotFound.js';
import StorePicker from './components/StorePicker';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				{/* Match wrapped in div as it cannot be a direct child of BrowserRouter*/}
				<Match exactly pattern="/" component={StorePicker} />
				{/* /:storeId is a route parameter */}
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.querySelector('#main'));