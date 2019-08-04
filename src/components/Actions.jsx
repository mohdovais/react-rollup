import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ActionsGroup from './ActionsGroup';

function Actions(props) {
    return (
        <Modal align="bottom">
            <ActionsGroup actions={props.actions} />
        </Modal>
    );
}

Actions.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.object),
};

export default React.memo(Actions);
