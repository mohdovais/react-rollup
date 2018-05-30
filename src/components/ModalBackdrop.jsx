import React from 'react';
import PropTypes from 'prop-types';
import './ModalBackdrop.css';

ModalBackdrop.propTypes = {
    className: PropTypes.string
};

export default class ModalBackdrop extends React.PureComponent {

    render() {
        const className = 'modal-backdrop ' + (this.props.className || '');
        return (
            <div className={className}></div>
        );
    }
}
