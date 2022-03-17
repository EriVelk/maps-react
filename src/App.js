import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListPointComponent from './components/ListPointComponent';
import CreatePointComponent from './components/CreatePointComponent';
import ViewPointComponent from './components/ViewPointComponent';



function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component={ListPointComponent}></Route>
                          <Route path="/create/:id" exact component={CreatePointComponent}></Route>
                          <Route path="/points/:id" exact component={ViewPointComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
