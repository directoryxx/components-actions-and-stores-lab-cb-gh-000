import { render } from './index.js'

const createStore = (reducer) => {
        let state;
        let listeners = [];
        const getState = () => state;

        const dispatch = (action) => {
            state = reducer(state, action);
            console.log(`the action is`)
            console.log(action)
            console.log(`the state is`)
            console.log(state)
            listeners.forEach(listener => listener())
        };

        const subscribe = (listener) => {
            listeners.push(listener);
        };

        dispatch({});
        return {
            getState: getState,
            dispatch: dispatch,
            subscribe: subscribe
        };
    }

    export default createStore;