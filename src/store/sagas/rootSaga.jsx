import youtubeSaga from './youtube-saga';
import UdemySaga from './udemy-saga'
import {all} from '@redux-saga/core/effects';

export default function* rootSaga() {
    yield all([
        UdemySaga(),
        youtubeSaga()
    ])
}