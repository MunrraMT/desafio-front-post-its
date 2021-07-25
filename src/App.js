import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
