import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ActionsGroup from './ActionsGroup';

Actions.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.object)
};

export default class Actions extends React.PureComponent {
    render() {
        return (
            <Modal align="bottom">
                <ActionsGroup actions={this.props.actions} />
            </Modal>
        );
    }
}
