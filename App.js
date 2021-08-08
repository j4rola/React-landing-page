import Header from './components/Header.js';
import './App.css';
import HomePage from './components/HomePage.js'; 
import Purchase from './components/Purchase.js';
import AboutUs from './components/AboutUs';
import ThankYou from './components/ThankYou';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        
          <Switch>

            <Route path='/' exact component={HomePage}>   
              
            </Route>

            <Route  path='/Purchase' component={Purchase}>
              
            </Route>

            <Route  path='/AboutUs' component={AboutUs}>
              
            </Route>

            <Route  path='/ThankYou' component={ThankYou}>
              
            </Route>
          
          </Switch>
      </div>
    </Router>
  );
}

export default App;
