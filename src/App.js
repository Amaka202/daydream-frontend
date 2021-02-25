import logo from './logo.svg';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Entries from './components/Entries';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          <Route path='/entries' exact component={Entries} />
      </Switch>    
    </div>
  );
}

export default App;
