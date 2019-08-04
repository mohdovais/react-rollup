import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

function Page(props) {
    const navBar = props.navBar;
    return (
        <article className="page">
            {navBar}
            <div className="page-content">{props.children}</div>
        </article>
    );
}

Page.propTypes = {
    navBar: PropTypes.element,
    children: PropTypes.array,
};

export default React.memo(Page);
