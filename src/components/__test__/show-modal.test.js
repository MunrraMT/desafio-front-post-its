import { render } from '@testing-library/react';
import ShowModal from '../show-modal';

describe('Deve testar o componente ShowModal', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<ShowModal />);
  });

  test('Deve conter o uma tag aside vazia, quando não tiver argumento', () => {
    const { getByTestId } = render(<ShowModal feedbackPost='' />);

    const aside = getByTestId('show-modal-aside-empty');

    expect(aside).toBeInTheDocument();
  });

  test('Deve conter o uma tag aside', () => {
    const { getByTestId } = render(<ShowModal />);

    const aside = getByTestId('show-modal-aside');

    expect(aside).toContainHTML('aside');
  });

  test('Deve conter o uma tag section', () => {
    const { getByTestId } = render(<ShowModal />);

    const section = getByTestId('show-modal-section');

    expect(section).toContainHTML('section');
  });

  test('Deve conter o texto "Passando argumento" que ira ser passado por argumento', () => {
    const { getByTestId } = render(
      <ShowModal feedbackPost='Passando argumento' />
    );

    const title = getByTestId('show-modal-title').textContent;

    expect(title).toContain('Passando argumento');
  });

  test('Deve conter o componente BtnViewTasks', () => {
    const { getByText } = render(
      <ShowModal feedbackPost='Passando argumento' />
    );

    expect(getByText('ver notas')).toBeInTheDocument();
  });

  test('Deve conter o componente BtnAddTask', () => {
    const { getByText } = render(
      <ShowModal feedbackPost='Passando argumento' />
    );

    expect(getByText('nova nota')).toBeInTheDocument();
  });
});
