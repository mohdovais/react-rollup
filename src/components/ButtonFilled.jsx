import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonFilled extends React.PureComponent {

    render() {
        const props = this.props;
        return (
            <Button buttonStyle="fill" onClick={props.onClick}>
                {props.children}
            </Button>
        );
    }
}

ButtonFilled.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.array
};