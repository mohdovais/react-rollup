import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

function NavBar(props) {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="left"></div>
                <div className="title">{props.title}</div>
                <div className="right"></div>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    title: PropTypes.string,
};

export default React.memo(NavBar);
