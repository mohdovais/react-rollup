import React from 'react';
import './Page.css';

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
