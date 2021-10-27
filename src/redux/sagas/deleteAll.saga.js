import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';

function* removeAll() {
    console.log('')
    try {
        yield axios.delete(`/api/all_results`);
        yield put({type: 'FETCH_ALL_RESULTS'});
    } catch (error) {
        console.log('Error with deleting the history...', error)
    }
}

function* deleteAllSaga() {
    yield takeLatest('DELETE_ALL', removeAll);
}
 export default deleteAllSaga;