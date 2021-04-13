const VideoItem = ({video}) => (
    <div className=" col-md-6" key={video.id.videoId}>
        <div className="video-item">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank"  rel="noreferrer">
                <img src={`https://i.ytimg.com/vi/${video.id.videoId}/maxresdefault.jpg`} alt={video.snippet.title}/>
                <h2>
                    {video.snippet.title}
                </h2>
            </a>
        </div>
    </div>
)
export default VideoItem;