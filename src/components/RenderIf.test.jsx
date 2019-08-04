import React from 'react';
import renderer from 'react-test-renderer';
import RenderIf from './RenderIf';

test('RenderIf should return null if condition is false', () => {
    const component = renderer.create(
        <RenderIf condition={false}>Hello</RenderIf>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toBeNull();
});

test('RenderIf should return null if condition is falsy', () => {
    const component = renderer.create(
        <RenderIf condition={null}>Hello</RenderIf>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toBeNull();
});

test('RenderIf should render children if condition is true', () => {
    const component = renderer.create(
        <RenderIf condition={true}>Hello</RenderIf>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toBe('Hello');
});

test('RenderIf should render children if condition is truthy', () => {
    const component = renderer.create(<RenderIf condition={5}>Hello</RenderIf>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toBe('Hello');
});
