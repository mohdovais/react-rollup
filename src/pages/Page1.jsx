import React from 'react';
import Page from './../components/Page';
import NavBar from './../components/NavBar';
import Card from './../components/Card';
import Block, { BlockTitle } from './../components/Block';
import Button from './../components/Button';
import LinkedList from './../components/LinkedList';
import Actions from './../components/Actions';

function Page1(props) {
    const navBar = <NavBar title="Hello world" />;

    return (
        <Page navBar={navBar}>
            <LinkedList
                items={['a', 'b', 'c']}
                renderer={a => a}
                onSelect={a => {
                    console.log(a);
                }}
            />

            <Card
                header="Lorem commented on Mar 6, 2017"
                footer="Lorem commented on Mar 6, 2017"
            >
                React doesn’t really provide ES modules right now, so import
                React, Component is just an artifact of how Babel works.
            </Card>

            <Card>
                <p>
                    React doesn’t really provide ES modules right now, so import
                    React, Component is just an artifact of how Babel works.
                </p>
                <Button onClick={props.wtf}>Click Me</Button>
            </Card>
            <Card header="Lorem commented on Mar 6, 2017">
                React doesn’t really provide ES modules right now, so import
                React, Component is just an artifact of how Babel works.
            </Card>

            <BlockTitle>Lorem Ipsum is simply dummy text</BlockTitle>
            <Block strong={true}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Block>

            <Block>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Block>
        </Page>
    );
}

export default React.memo(Page1);
