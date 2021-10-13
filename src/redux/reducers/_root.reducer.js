import { combineReducers } from "redux";
import result from '../reducers/result.reducer';

const rootReducer = combineReducers({
    result,
});

export default rootReducer;