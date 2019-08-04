//import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Application';
import './assets/css/bootstrap-reboot.css';
import './assets/css/base.css';

//const HotApp = hot(App);

function render(element) {
    ReactDOM.render(<App />, element);
}

function unmount(element) {
    ReactDOM.unmountComponentAtNode(element);
}

export default {
    render,
    unmount,
};
