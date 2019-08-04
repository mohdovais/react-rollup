import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function filterAttribues(props) {
    return Object.keys(props)
        .filter(key => /[a-z]/.test(key))
        .reduce((accum, key) => {
            accum.key = props[key];
            return accum;
        }, {});
}

const BUTTON_STYLES = ['link', 'outline', 'fill'];

function Button(props) {
    const className =
        BUTTON_STYLES.indexOf(props.buttonStyle) === -1
            ? null
            : 'button-' + props.buttonStyle;

    return (
        <button
            type="button"
            {...filterAttribues(props)}
            className={className}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    buttonStyle: PropTypes.oneOf(BUTTON_STYLES),
    onClick: PropTypes.func,
    children: PropTypes.array,
};

export default React.memo(Button);
