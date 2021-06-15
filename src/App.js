import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import SoundCloudWidget from './components/ SoundCloud/SoundCloudWidget';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Setting from './pages/Setting'
import './styles/responsive.css'
import Missions from './pages/Missions';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
        <Router>
          <Header />
          <Switch>
            <Route path="/setting">
              <Setting />
            </Route>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route default path="/">
              <Body />
            </Route>
          </Switch>
        </Router>
        </div>
        <div className="col-3">
          <SoundCloudWidget />
        </div>
      </div>
      
    </div>
  );
}

export default App;
