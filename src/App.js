
import CalcPage from './components/CalcPage'
import ResultsPage from './components/ResultsPage'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
          <Route exact path="/">
            <CalcPage />
          </Route>
          <Route exact path="/results">
            <ResultsPage />
          </Route> 
    </Router>
  );
}

export default App;
