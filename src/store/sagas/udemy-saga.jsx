import {  delay, takeEvery } from 'redux-saga/effects'
import { UDEMY_LOAD_COURSES_INIT } from "../actions/udemy-actions";

function* udemy(action) {
    yield delay(4000);
    console.log("HI from the UdemySaga");
}


export default function* udemySaga() {
    yield takeEvery(UDEMY_LOAD_COURSES_INIT, udemy)
}
