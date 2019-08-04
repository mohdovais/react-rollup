import React from 'react';
import PropTypes from 'prop-types';
import './ModalBackdrop.css';

function ModalBackdrop(props) {
    const className = 'modal-backdrop ' + (props.className || '');
    return <div className={className}></div>;
}

ModalBackdrop.propTypes = {
    className: PropTypes.string,
};

export default React.memo(ModalBackdrop);
