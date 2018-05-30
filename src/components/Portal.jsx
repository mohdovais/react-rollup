import ReactDOM from 'react-dom';
import React from 'react';
import './Modal.css';

// These two containers are siblings in the DOM
const root = document.getElementById('root');

export default class Portal extends React.Component {
    constructor(props) {
        super(props);
        const el = document.createElement('div');
        el.classList = props.className || 'portal';
        this.el = el;
        this.root = props.root || root;
    }

    componentDidMount() {
        this.root.appendChild(this.el);
    }

    componentWillUnmount() {
        this.root.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}
