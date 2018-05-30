import React from 'react';
import PropTypes from 'prop-types';
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
        return (
            <div className="block-title">
                {this.props.children}
            </div>
        );
    }
}

Block.propTypes = {
    strong: PropTypes.bool,
    children: PropTypes.array
};

BlockTitle.propTypes = {
    children: PropTypes.array
};