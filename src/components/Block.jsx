import React from 'react';
import './Block.css';

export default class Block extends React.PureComponent {
    render() {
        const props = this.props;
        const className = props.strong === true ? 'block-strong' : 'block';
        return (
            <div className={className}>
                {props.children}
            </div>
        );
    }
}

export class BlockTitle extends React.PureComponent {
    render() {
        const props = this.props;
        return (
            <div className="block-title">
                {props.children}
            </div>
        );
    }
}