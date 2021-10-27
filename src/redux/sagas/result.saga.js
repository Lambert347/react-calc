import {put, takeLatest} from "@redux-saga/core/effects";
import axios from "axios";

function* resultSaga(action){
    try {
        console.log(action.payload);
        yield axios.post('/api/result/', action.payload);
        yield put({type: 'FETCH_RESULT'});
    } catch(error) {
        console.log('Error with adding a result', error)
    }
}

function* addResultSaga(){
    yield takeLatest('ADD_NEW_RESULT', resultSaga);
}



export default addResultSaga;