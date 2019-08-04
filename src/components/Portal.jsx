import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

function Portal(props) {
    let [el] = React.useState(document.createElement('div'));
    el.classList = props.className || 'portal';

    React.useEffect(() => {
        const root = props.root || document.getElementById('root');
        root.appendChild(el);

        return function unmount() {
            root.removeChild(el);
        };
    }, []);

    return ReactDOM.createPortal(props.children, el);
}

Portal.propTypes = {
    className: PropTypes.string,
    root: PropTypes.object,
    children: PropTypes.array,
};

export default React.memo(Portal);
