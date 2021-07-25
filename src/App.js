import './app.scss';
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
