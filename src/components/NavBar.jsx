import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

NavBar.propTypes = {
    title: PropTypes.string
};

export default class NavBar extends React.PureComponent {

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="left"></div>
                    <div className="title">{this.props.title}</div>
                    <div className="right"></div>
                </div>
            </nav>
        );
    }
}
