import {} from 'pages';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Planets from 'pages/Planets';
import PlanetDetails from 'pages/PlanetDetails';
import Starships from 'pages/Starships';
import StarshipDetails from 'pages/StarshipDetails';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/(planets)?' exact>
              <ErrorBoundary>
                <Planets />
              </ErrorBoundary>
            </Route>
            <Route path='/planet/:id'>
              <ErrorBoundary>
                <PlanetDetails />
              </ErrorBoundary>
            </Route>
            <Route path='/(starships)?' exact>
              <ErrorBoundary>
                <Starships />
              </ErrorBoundary>
            </Route>
            <Route path='/starship/:id'>
              <ErrorBoundary>
                <StarshipDetails />
              </ErrorBoundary>
            </Route>
            <Route>
              <>
                <p>Resource Not Found</p>
                <p>
                  <Link to='/'>go Home</Link>
                </p>
              </>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
