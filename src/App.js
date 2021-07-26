import './app.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/home-page';
import ViewerTasksPage from './pages/viewer-tasks-page';
import AddNewTaskPage from './pages/add-new-task-page';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
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

          <Route exact path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
