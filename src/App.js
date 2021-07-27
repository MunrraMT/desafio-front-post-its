import './App.scss';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/home-page';
import ViewerTasksPage from './pages/viewer-tasks-page';
import AddNewTaskPage from './pages/add-new-task-page';
import SimplifiedPage from './pages/simplified-page';

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/view-tasks'>
            <ViewerTasksPage />
          </Route>

          <Route exact path='/add-task'>
            <AddNewTaskPage />
          </Route>

          <Route exact path='/simplified'>
            <SimplifiedPage />
          </Route>

          <Route exact path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
