import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* removeResult(action) {
    try {
        yield axios.delete(`api/result/${action.payload}`);
        yield put({type: 'FETCH_ALL_RESULTS'});
    } catch (error) {
        console.log('Error with deleting specific result: ' , error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_RESULT', removeResult);
}

export default deleteSaga;