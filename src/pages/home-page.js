import BtnAddNotas from '../components/btn-add-notas';
import BtnModSimplified from '../components/btn-mod-simplified';
import BtnVerNotas from '../components/btn-ver-notas';

const HomePage = () => (
  <main className='home__content'>
    <BtnAddNotas />
    <BtnVerNotas />
    <BtnModSimplified />
  </main>
);

export default HomePage;
