import { COURSES_LOAD_FAILT, COURSES_LOAD_SUCCESS } from "../actions/udemy-actions";

export default function myCourses(state = [], action) {
    switch (action.type) {
        case COURSES_LOAD_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        case COURSES_LOAD_FAILT:
            return {
                ...state,
                AppState: "An error occured"
            }
        default:
            return  state;
    }
}