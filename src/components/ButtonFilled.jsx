import React from 'react';
import Button from './Button';

export default class ButtonFilled extends React.PureComponent {
    render() {
        const props = this.props;
        return (
            <Button buttonStyle="fill">
                {props.children}
            </Button>
        );
    }
}