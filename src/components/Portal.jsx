import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

const root = document.getElementById('root');

Portal.propTypes = {
    className: PropTypes.string,
    root: PropTypes.object,
    children: PropTypes.array
};

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
