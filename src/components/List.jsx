import React from 'react';
import './List.css';

const getList = renderer => (items = []) => {
    items.map((item, index, items) => {
        return <li key={index}>{renderer(item, index, items)}</li>;
    });
};

function List(props) {
    const className = 'list ' + (props.className || '');
    return (
        <ul className={className}>{getList(props.renderer)(props.items)}</ul>
    );
}

export default React.memo(List);
