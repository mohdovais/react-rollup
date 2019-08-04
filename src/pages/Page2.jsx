import React from 'react';
import Page from './../components/Page';
import NavBar from './../components/NavBar';
import Card from './../components/Card';
import Button from './../components/Button';
import ButtonOutlined from './../components/ButtonOutlined';
import ButtonLink from './../components/ButtonLink';
import ButtonFilled from './../components/ButtonFilled';
import Portal from './../components/Portal';

function Page2() {
    const navBar = <NavBar title="Hello world 2" />;

    return (
        <Page navBar={navBar}>
            <Card>
                <Button>Click Me</Button>
                <ButtonLink>Click Me</ButtonLink>
                <ButtonOutlined>Click Me</ButtonOutlined>
                <ButtonFilled>Click Me</ButtonFilled>
            </Card>

            <Portal root={document.getElementById('pages')}>
                <Page>
                    <Card>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque laoreet nibh sed sem pellentesque, ut
                        tempus ex hendrerit. Donec a leo sodales, laoreet lectus
                        non, tristique arcu. Duis vestibulum vitae diam in
                        tempor. Nullam imperdiet massa sagittis velit egestas
                        semper. Suspendisse risus turpis, blandit vitae massa
                        vel, gravida lacinia tellus. Nunc eu euismod massa, id
                        feugiat nibh. Aliquam ultrices semper dolor non
                        accumsan. Maecenas nec sem pretium, luctus quam quis,
                        tincidunt dui. Nulla dictum id ligula vitae tincidunt.
                    </Card>
                </Page>
            </Portal>
        </Page>
    );
}

export default React.memo(Page2);
