import React from 'react';
import Button from './Button';

export default class ButtonOutlined extends React.PureComponent {
    render() {
        const props = this.props;
        return (
            <Button buttonStyle="outline">
                {props.children}
            </Button>
        );
    }
}