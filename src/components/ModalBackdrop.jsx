import React from 'react';
import './ModalBackdrop.css';

export default class ModalBackdrop extends React.PureComponent {
    render() {
        const className = 'modal-backdrop ' + (this.props.className || '');
        return (
            <div className={className}></div>
        );
    }
}
