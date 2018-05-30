import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonOutlined extends React.PureComponent {
    render() {
        const props = this.props;
        return (
            <Button buttonStyle="outline" onClick={props.onClick}>
                {props.children}
            </Button>
        );
    }
}

ButtonOutlined.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.array
};
