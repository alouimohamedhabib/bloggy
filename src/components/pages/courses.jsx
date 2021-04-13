import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { COURSES_LOAD_INIT } from "../../store/actions/udemy-actions";
import CourseItem from '../templates/courses-item';
const CoursesComponent = (props) => {
    const dispatch = useDispatch();
    const { coursesData } = props;
    useEffect(() => {
        dispatch({ type: COURSES_LOAD_INIT });
    }, [dispatch]);

    return <>
        {coursesData.results
            && coursesData.results.length > 0
            && coursesData.results.map(courseItem => { return <CourseItem key={courseItem.id} courseItem={courseItem} /> })
        }
    </>
}

function mapStateToProps(state) {
    return {
        coursesData: state.myCourses
    }
}
export default connect(mapStateToProps)(CoursesComponent);