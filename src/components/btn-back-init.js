import { useHistory } from 'react-router-dom';

const BtnBackInit = ({ mod }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <button onClick={handleClick} className='home__btn' type='button'>
      {mod === 'simplified' ? 'Voltar para tela inicial' : 'Voltar'}
    </button>
  );
};

export default BtnBackInit;
