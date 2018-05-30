import React from 'react';
import Pages from './components/Pages';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

export default class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [Page1]
        };
    }

    render() {
        return (
            <Pages id="pages">
                {this.state.pages.map((Page, i) => <Page key={i} wtf={this.onWtf.bind(this)} />)}
            </Pages>
        );
    }

    onWtf() {
        this.setState(state => {
            return Object.assign({}, state, {
                pages: state.pages.concat([Page2])
            });
        });
    }
}
