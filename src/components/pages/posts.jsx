import {connect, useDispatch} from "react-redux";
import {YOUTUBE_LOAD_LATEST_VIDEO_LOAD} from "../../store/actions/youtube-actions";
import {useEffect} from "react";
import VideoItem from "../templates/videoitem";


const PostsComponent = (props) => {
    const dispatch = useDispatch();
    const {videos} = props;

    useEffect(() => {
        dispatch({type: YOUTUBE_LOAD_LATEST_VIDEO_LOAD})
    }, [dispatch]);

    return <>
        {videos.items && videos.items.length > 0
        && <div className="row">
            {
                videos.items.map(video => {
                    return <VideoItem video={video} key={video.id.videoId}/>
                })
            }
        </div>}
    </>

}

function mapStateToProps(state) {
    return {
        videos: state.youtubeVideos,
    }
}

export default connect(mapStateToProps)(PostsComponent);