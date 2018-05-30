import React from 'react';
import './Pages.css';

export default class View extends React.PureComponent {
    render(){
        return (
            <section id="pages" className="pages">{this.props.children}</section>
        );
    }
}