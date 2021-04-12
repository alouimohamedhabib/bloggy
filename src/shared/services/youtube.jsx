import xlog from "../helpers/xlog";

const YouTubeApi = () => {
    fetch(process.env.REACT_APP_YOUTUBE_API_URL)
        .then(response => response.json())
        .then(data => xlog(data))
        .catch(err => xlog(err))
}
const YouTubeApijson = () => {
    return fetch('/jsons/youtube-lastest.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        })
}

export {
    YouTubeApijson,
    YouTubeApi
}