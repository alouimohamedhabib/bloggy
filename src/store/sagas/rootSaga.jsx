import {all} from '@redux-saga/core/effects';
import coursesSaga from './courses-saga';
import {  youtubeSaga } from './youtube-saga';
 

export default function* rootSaga() {
    yield all([
        youtubeSaga(),
        coursesSaga()

    ])
}