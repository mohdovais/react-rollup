import React from 'react';
import PropTypes from 'prop-types';

RenderIf.propTypes = {
    condition: PropTypes.bool,
    children: PropTypes.array
};

export default class RenderIf extends React.PureComponent {

    render() {
        if (this.props.condition) {
            return this.props.children;
        } else {
            return null;
        }
    }
}
