import React from 'react';
import PropTypes from 'prop-types';
import './Pages.css';

View.propTypes = {
    children: PropTypes.array
};

export default class View extends React.PureComponent {

    render() {
        return (
            <section id="pages" className="pages">
                {this.props.children}
            </section>
        );
    }
}