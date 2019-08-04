import React from 'react';
import PropTypes from 'prop-types';
import './Pages.css';

function Pages(props) {
    return (
        <section id="pages" className="pages">
            {props.children}
        </section>
    );
}

Pages.propTypes = {
    children: PropTypes.array,
};

export default React.memo(Pages);
