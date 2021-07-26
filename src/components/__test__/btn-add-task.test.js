import { render } from '@testing-library/react';
import BtnAddTask from '../btn-add-task';

describe('Deve testar o componente BtnAddTask', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<BtnAddTask />);
  });

  test('Deve conter uma tag Button', () => {
    const { getByTestId } = render(<BtnAddTask />);

    const btnText = getByTestId('btn-new-task');

    expect(btnText).toContainHTML('button');
  });

  test('Deve conter o texto "nova nota"', () => {
    const { getByTestId } = render(<BtnAddTask />);

    const btnText = getByTestId('btn-new-task').textContent;

    expect(btnText).toContain('nova nota');
  });
});
