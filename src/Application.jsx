import React from 'react';
import Pages from './components/Pages';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

export default function Application(props) {
    const [pages, setPages] = React.useState([Page1]);

    return (
        <Pages id="pages">
            {pages.map((Page, i) => (
                <Page key={i} wtf={() => setPages(pages.concat([Page2]))} />
            ))}
        </Pages>
    );
}
