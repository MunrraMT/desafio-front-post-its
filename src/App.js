import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/home-page';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
