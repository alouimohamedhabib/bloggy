import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { UDEMY_LOAD_COURSES_INIT } from "../../store/actions/udemy-actions";

const Home = () => {

    const dispatch = useDispatch();
    const loadVideo = () => {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => dispatch({ type: UDEMY_LOAD_COURSES_INIT, json }))
    }
    return <div className="home-component text-center">
        <h4>👋, I'm </h4>
        <h1 className="text-center"> <span className="fw-bold">Mohamed Habib ALOUI</span>  </h1>
        <p>
            Father, web developer,<a href="https://youtube.com/alouimohamedhabib?sub_confirmation=1" target="_blank"  rel="noreferrer">YouTuber</a> and <Link to="/courses">online instructor</Link>
        </p>
        <button onClick={() => loadVideo()}>Load videos</button>


    </div>
}

export default Home;