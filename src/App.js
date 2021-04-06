import './App.css';
import Header from './components/templates/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/about';
import Home from './components/pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
