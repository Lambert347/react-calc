import {all} from 'redux-saga/effects';
import addResultSaga from '../sagas/result.saga';

export default function* rootSaga() {
    yield all([
        addResultSaga(),
    ]);
}