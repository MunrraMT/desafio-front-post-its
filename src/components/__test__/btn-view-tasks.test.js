import { render } from '@testing-library/react';
import BtnViewTasks from '../btn-view-tasks';

describe('Deve testar o componente BtnViewTasks', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<BtnViewTasks />);
  });

  test('Deve conter o texto "ver notas"', () => {
    const { getByTestId } = render(<BtnViewTasks />);

    const btnText = getByTestId('btn-view-tasks').textContent;

    expect(btnText).toContain('ver notas');
  });

  test('Deve conter a tag Button', () => {
    const { getByTestId } = render(<BtnViewTasks />);

    const btnText = getByTestId('btn-view-tasks');

    expect(btnText).toContainHTML('button');
  });
});
