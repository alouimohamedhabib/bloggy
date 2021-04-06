import { YOUTUBE_LOAD_LATEST_VIDEO_LOAD, YOUTUBE_LOAD_LATEST_VIDEO_SUCCESS } from "../actions/youtube-actions"

export default function youtubeVideos(state = [], action) {
    switch (action.type) {
        case YOUTUBE_LOAD_LATEST_VIDEO_SUCCESS:
            return {
                ...state,
                youtubevideos: action.patyload
            }
        case YOUTUBE_LOAD_LATEST_VIDEO_LOAD:
            return state
        default:
            return state
    }
}

