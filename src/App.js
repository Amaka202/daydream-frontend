import logo from './logo.svg';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Entries from './components/Entries';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/entries' exact component={Entries} />
      </Switch>    
    </div>
  );
}

export default App;
