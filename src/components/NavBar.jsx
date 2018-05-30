import React from 'react';
import './NavBar.css';

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
