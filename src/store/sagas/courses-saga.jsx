import { call, put, takeLatest } from 'redux-saga/effects'

import { CoursesApiStatic } from '../../shared/services/courses-api';
import { COURSES_LOAD_FAILT, COURSES_LOAD_INIT, COURSES_LOAD_SUCCESS } from '../actions/udemy-actions';

function* courseshandler(action) {
    try {
        const data = yield call(CoursesApiStatic);
        yield put({ type: COURSES_LOAD_SUCCESS, data })
    } catch (error) {
        yield put({ type: COURSES_LOAD_FAILT, error: error })
    }
}


export default function* coursesSaga() {
    yield takeLatest(COURSES_LOAD_INIT, courseshandler)
}
