import {combineReducers} from 'redux';

import Task2Reducer1 from './Task2Reducer1';
import Task2Reducer2 from './Task2Reducer2';
import Task3Reducers1 from './Task3Reducers1';
import Task3Reducers2 from './Task3Reducers2';
import Task3Reducers3 from './Task3Reducers3';
import Task3Reducers4 from './Task3Reducers4';
import Task4Reducers from './Task4Reducers';
import Task5Reducers from './Task5Reducers';

export default combineReducers({

    Task3Reducers1,Task3Reducers2,Task3Reducers3,Task3Reducers4,

Task2Reducer1,Task2Reducer2,

Task4Reducers,Task5Reducers


});