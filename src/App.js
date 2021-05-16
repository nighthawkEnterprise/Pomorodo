import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Timer from './Timer/Timer';
import Nav from './Nav/Nav';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
class App extends Component {
    render() {
        return(
            <Router>
              <div id="container"> 
                <Nav />
                <div id="display"> 
                  <Route path='/' exact component={Timer} />
                  <Route path='/contact' component={Contact} />
                </div>
                <Footer />
              </div>  
            </Router>

        )
    }
}
export default App;