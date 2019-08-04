import React from 'react';
import PropTypes from 'prop-types';

function RenderIf(props) {
    return props.condition ? props.children : null;
}

RenderIf.propTypes = {
    condition: PropTypes.bool,
    children: PropTypes.array,
};

export default React.memo(RenderIf);
