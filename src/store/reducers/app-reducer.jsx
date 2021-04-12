import {UPDATE_PAGE_TITLE} from "../actions/other-actions";

const AppState = (state = [], action) => {
    switch (action.type) {
        case UPDATE_PAGE_TITLE:
            return {
                ...state,
                title: action.title
            }
        default:
            return state
    }
}
export default AppState;