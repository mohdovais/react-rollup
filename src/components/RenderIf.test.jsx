import React from 'react';
import ReactDOM from 'react-dom';
//import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import RenderIf from './RenderIf';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test('RenderIf should return null if condition is false', () => {
    act(() => {
        ReactDOM.render(<RenderIf />, container);
    });

    expect(container.innerHTML).toBe('');
});

/*
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
*/
