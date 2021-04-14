import WideBlock from "../styled/wide-block";

const VideoItem = ({video}) => (
    <div className=" col-xs-12 col-md-6 col-lg-4 " key={video.id.videoId}>
        <WideBlock className="video-item">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank"  rel="noreferrer">
                <img src={`https://i.ytimg.com/vi/${video.id.videoId}/maxresdefault.jpg`} alt={video.snippet.title}/>
                <h2>
                    {video.snippet.title}
                </h2>
            </a>
        </WideBlock>
    </div>
)
export default VideoItem;