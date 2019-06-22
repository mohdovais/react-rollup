import React from 'react';
//import { ReactReduxContext } from 'react-redux';

const PageNotFound: React.FunctionComponent = (): JSX.Element => {
    return (
        //<ReactReduxContext.Consumer>
        <h1>Page Not Found</h1>
        //</ReactReduxContext.Consumer>
    );
};

export default React.memo(PageNotFound);
