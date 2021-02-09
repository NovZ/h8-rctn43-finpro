import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index'
import About from './pages/About/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route render={(renderProps) => <div style={{ textAlign: 'center', color: 'red'}}>Error</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
