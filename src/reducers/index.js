import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    users : (state = [],action) => action.payload || state
});

export default rootReducers;