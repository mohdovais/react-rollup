import React from 'react';
import List from './List';
import './LinkedList.css';

export default class LinkedList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.listRender = this.listRender.bind(this);
    }

    render() {
        return (
            <List
                className="linked-list"
                items={this.props.items || []}
                renderer={this.listRender}
            ></List>
        );
    }

    listRender(item, index, items) {
        return (
            <button type="button" data-index={index} onClick={this.onItemClick}>
                {this.props.renderer(item, index, items)}
            </button>
        );
    }

    onItemClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        const onSelect = this.props.onSelect;

        if (!isNaN(index) && typeof onSelect === 'function') {
            onSelect(this.props.items[index]);
        }
    }
}
