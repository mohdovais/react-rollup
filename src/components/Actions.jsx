import React from 'react';
import Modal from './Modal';
import ActionsGroup from './ActionsGroup';

export default class Actions extends React.PureComponent {
    render() {
        return (
            <Modal align="bottom">
                <ActionsGroup actions={this.props.actions} />
            </Modal>
        );
    }
}
