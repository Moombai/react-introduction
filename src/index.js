// Dependencies
import React from 'react';
import { render } from 'react-dom';

// uses webpack to compile the contents of the file and add a style tag in this location
import './css/style.css';

// we must add the relative path so that Node does not look in the Node modules folder 
import App from './components/App';
import StorePicker from './components/StorePicker';

render(<App />, document.querySelector('#main'));