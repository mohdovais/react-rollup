import React from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';
import ModalBacdrop from './ModalBackdrop';
import './Modal.css';

const classNames = {
    center: 'modal-center',
    bottom: 'modal-end',
    cover: 'modal-cover',
};

function Modal() {
    const className = 'modal ' + (classNames[this.props.align] || '');
    return (
        <Portal className={className}>
            <ModalBacdrop className="backdrop-in" />
            <div className="modal-content">{this.props.children}</div>
        </Portal>
    );
}

Modal.propTypes = {
    align: PropTypes.string,
    children: PropTypes.children,
};

export default React.memo(Modal);
