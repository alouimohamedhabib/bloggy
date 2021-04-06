import { useDispatch } from "react-redux";
import { YOUTUBE_LOAD_LATEST_VIDEO_LOAD } from "../../store/actions/youtube-actions";

const Home = () => {

    const dispatch = useDispatch();
    const loadVideo = () => {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => dispatch({ type: YOUTUBE_LOAD_LATEST_VIDEO_LOAD, json }))
    }
    return <>
        <h1>         Home component</h1>
        <button onClick={() => loadVideo()}>Load videos</button>


    </>
}

export default Home;