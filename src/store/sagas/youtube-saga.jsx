import {delay, takeLatest} from "@redux-saga/core/effects";
import {YOUTUBE_LOAD_LATEST_VIDEO_LOAD, YOUTUBE_LOAD_LATEST_VIDEO_SUCCESS} from "../actions/youtube-actions";
import xlog from "../../shared/helpers/xlog";
import {YouTubeApijson} from "../../shared/services/youtube";
import {call, put} from "redux-saga/effects";

function* youtube(action) {
    try {
        yield delay(1000);
        const data = yield call(YouTubeApijson);
        yield put({type: YOUTUBE_LOAD_LATEST_VIDEO_SUCCESS, data})
    } catch (err) {
        xlog(err)
    }
}

export default function* youtubeSaga() {
    yield takeLatest(YOUTUBE_LOAD_LATEST_VIDEO_LOAD, youtube);
}