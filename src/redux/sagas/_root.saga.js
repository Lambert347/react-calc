import {all} from 'redux-saga/effects';
import addResultSaga from '../sagas/result.saga';
import fetchSaga from './getResult.saga';
import getAllResults from './getAllResults.saga';
import deleteAll from './deleteAll.saga';
import deleteSaga from './delete.saga';

export default function* rootSaga() {
    yield all([
        addResultSaga(),
        fetchSaga(),
        getAllResults(),
        deleteAll(),
        deleteSaga(),
    ]);
}