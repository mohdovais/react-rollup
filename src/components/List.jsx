import React from 'react';
import './List.css';

export default class List extends React.PureComponent {

    render() {
        const className = 'list ' + (this.props.className || '');
        return (
            <ul className={className}>
                {this.getList(this.props.items || [])}
            </ul>
        );
    }

    getList(items) {
        return items.map((item, index, items) => {
            return (
                <li key={index}>
                    {this.props.renderer(item, index, items)}
                </li>
            );
        });
    }
}
