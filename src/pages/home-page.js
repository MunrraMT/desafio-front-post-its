import BtnAddTask from '../components/btn-add-task';
import BtnModSimplified from '../components/btn-mod-simplified';
import BtnViewTasks from '../components/btn-view-tasks';

const HomePage = () => (
  <main className='home__content'>
    <BtnAddTask />
    <BtnViewTasks />
    <section className='division-horizontal' />
    <BtnModSimplified />
  </main>
);

export default HomePage;
