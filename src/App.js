import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/layout/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/about';
import Home from './components/pages/home';
import CoursesComponent from './components/pages/courses';
import PostsComponent from "./components/pages/posts";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_PAGE_TITLE} from "./store/actions/other-actions";
import {useEffect} from "react";

function App() {
    const title = useSelector(state => (state.AppState.title));
    const dispatch = useDispatch();
    useEffect(() =>{

    }, [title])
    return (
        <div className="App">
            <Router>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header/>
                <div className="container">
                    <Route exact path="/" title="Aloui " render={() => {
                        dispatch({type: UPDATE_PAGE_TITLE, title: "Home"});
                        return <Home/>
                    }}/>
                    <Route path="/courses"   render={() => {
                        dispatch({type: UPDATE_PAGE_TITLE, title: "Courses"});
                        return <CoursesComponent/>
                    }}/>
                    <Route path="/about"   render={() => {
                        dispatch({type: UPDATE_PAGE_TITLE, title: "About"});
                        return <About/>
                    }}/>
                    <Route path="/posts"   render={() => {
                        dispatch({type: UPDATE_PAGE_TITLE, title: "Posts"});
                        return <PostsComponent/>
                    }}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
