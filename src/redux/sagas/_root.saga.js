import {all} from 'redux-saga/effects';
import addResultSaga from '../sagas/result.saga';
import fetchSaga from './getResult.saga';

export default function* rootSaga() {
    yield all([
        addResultSaga(),
        fetchSaga(),
    ]);
}