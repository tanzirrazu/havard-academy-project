
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Success from './Components/SuccessStory/success';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/404/NotFound';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
     <Router>
     <Header></Header>
       <Switch>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route exact path="/">
            <Home></Home>
         </Route>
          <Route path="/about">
           <About></About>
          </Route>
          <Route path="/services">
           <Services></Services>
          </Route>
          <Route path="/success">
           <Success></Success>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
