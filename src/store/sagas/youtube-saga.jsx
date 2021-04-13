import { takeLatest } from "@redux-saga/core/effects";
import { YOUTUBE_LOAD_LATEST_VIDEO_LOAD, YOUTUBE_LOAD_LATEST_VIDEO_SUCCESS } from "../actions/youtube-actions";
import xlog from "../../shared/helpers/xlog";
import { YouTubeApijson } from "../../shared/services/youtube";
import { CoursesApiStatic } from "../../shared/services/courses-api";
import { call, put } from "redux-saga/effects";
import { COURSES_LOAD_INIT, COURSES_LOAD_SUCCESS } from "../actions/udemy-actions";

function* youtube(action) {
    try {
        const data = yield call(YouTubeApijson);
        yield put({ type: YOUTUBE_LOAD_LATEST_VIDEO_SUCCESS, data })
    } catch (err) {
        xlog(err)
    }
}

function* youtubeSaga() {
    yield takeLatest(YOUTUBE_LOAD_LATEST_VIDEO_LOAD, youtube);
}
export {
    youtubeSaga
}