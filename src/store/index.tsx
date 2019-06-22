import { createStore } from 'redux';

const intialState = {
    x: 1,
};
interface State {
    x: number;
}

function reducer(state: State = intialState, action) {
    return state;
}

export default createStore(reducer);
