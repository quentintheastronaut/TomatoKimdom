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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route default path="/">
            <Body />
          </Route>
        </Switch>
        <SoundCloudWidget />
      </Router>
    </div>
  );
}

export default App;
