import {all} from 'redux-saga/effects';
import resultSaga from '../sagas/result.saga';

export default function* rootSaga() {
    yield all([
        resultSaga
    ]);
}