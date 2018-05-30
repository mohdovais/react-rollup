import React from 'react';
import './Button.css';

const BUTTON_STYLES = ['link', 'outline', 'fill'];

function filterAttribues(props) {
    return Object.keys(props)
        .filter(key => /[a-z]/.test(key))
        .reduce((accum, key) => {
            accum.key = props[key];
            return accum;
        }, {});
}

export default class Buttons extends React.PureComponent {
    render() {
        const props = this.props;
        const className = BUTTON_STYLES.indexOf(props.buttonStyle) === -1 ? null : 'button-' + props.buttonStyle;

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
}
