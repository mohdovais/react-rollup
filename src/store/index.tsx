import { createStore } from 'redux';

const intialState = {
    x: 1,
};
interface State {
    x: number;
}

function reducer(state: State = intialState): State {
    return state;
}

export default createStore(reducer);
