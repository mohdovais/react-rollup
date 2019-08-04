import React from 'react';
import PropTypes from 'prop-types';
import './ActionsGroup.css';

function getItem(action, index) {
    const onClick = action.onClick;
    if (typeof onClick === 'function') {
        return (
            <button
                type="button"
                className="actions-button"
                onClick={action.onClick}
                key={index}
            >
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

function ActionsGroup(props) {
    return <div className="actions-group">{props.actions.map(getItem)}</div>;
}

ActionsGroup.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.object),
};

export default React.memo(ActionsGroup);
