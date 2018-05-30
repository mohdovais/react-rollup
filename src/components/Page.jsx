import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

Page.propTypes = {
    navBar: PropTypes.element,
    children: PropTypes.array
};

export default class Page extends React.PureComponent {

    render() {
        const navBar = this.props.navBar;
        return (
            <article className="page">
                {navBar}
                <div className="page-content">{this.props.children}</div>
            </article>
        );
    }
}
