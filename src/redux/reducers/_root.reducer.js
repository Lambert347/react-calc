import { combineReducers } from "redux";
import result from '../reducers/result.reducer';
import allResults from '../reducers/all.results.reducer';

const rootReducer = combineReducers({
    result,
    allResults,
});

export default rootReducer;