import React from 'react';

export default class RenderIf extends React.PureComponent {
    render() {
        if (this.props.condition) {
            return this.props.children;
        }else{
            return null;
        }
    }
}
