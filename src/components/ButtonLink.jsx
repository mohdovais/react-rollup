import React from 'react';
import Button from './Button';

export default class ButtonLink extends React.PureComponent {
    render() {
        const props = this.props;
        return (
            <Button buttonStyle="link">
                {props.children}
            </Button>
        );
    }
}