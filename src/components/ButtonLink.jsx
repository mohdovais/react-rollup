import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonLink extends React.PureComponent {

    render() {
        const props = this.props;
        return (
            <Button buttonStyle="link" onClick={props.onClick}>
                {props.children}
            </Button>
        );
    }
}

ButtonLink.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.array
};
