import 'antd/dist/antd.css';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import { Route, Switch } from "react-router-dom";
import DisplayEntries from './components/entries/DisplayEntries';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Reminders from './components/Reminders';
import PostEntry from './components/PostEntry';
import SetReminder from './components/SetReminder';
import Entry from './components/entries/Entry';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          <Route path='/entries' exact component={DisplayEntries} />
          {/* <Route path='/entries/:id' exact component={Entry} /> */}
          <Route path='/postentry' exact component={PostEntry} />
          <Route path='/reminders' exact component={Reminders} />
          <Route path='/createreminder' exact component={SetReminder} />
      </Switch>    
    </div>
  );
}

export default App;
