const CoursesApi = () => {
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
const CoursesApiStatic = (platform) => {
    //console.log(platform);
    const jsonFile = platform !== "udemy" ? "/jsons/udemy-courses.json" : "/jsons/skillshare-courses.json";
    return fetch(jsonFile)
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
    CoursesApi,
    CoursesApiStatic

}