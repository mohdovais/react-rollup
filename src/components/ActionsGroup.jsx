import React from 'react';
import PropTypes from 'prop-types';
import './ActionsGroup.css';

ActionsGroup.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.object)
};

export default class ActionsGroup extends React.PureComponent {

    render() {
        return (
            <div className="actions-group">
                {this.props.actions.map(this.getItem)}
            </div>
        );
    }

    getItem(action, index) {
        const onClick = action.onClick;
        if (typeof onClick === 'function') {
            return (
                <button type="button" className="actions-button" onClick={action.onClick} key={index}>
                    {action.label}
                </button>
            );
        } else {
            return (
                <label className="actions-label" key={index}>
                    {action.label}
                </label>
            );
        }
    }
}