import { createStore } from 'redux';
import footballApp from '../reducers';

const store = createStore(footballApp);

export default store;
