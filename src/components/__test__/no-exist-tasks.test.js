import { render } from '@testing-library/react';
import NoExistTasks from '../no-exist-tasks';

describe('Deve testar o componente NoExistTasks', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<NoExistTasks />);
  });

  test('Deve conter o uma tag main', () => {
    const { getByTestId } = render(<NoExistTasks />);

    const main = getByTestId('no-exist-tasks-main');

    expect(main).toContainHTML('main');
  });

  test('Deve conter o uma tag h3', () => {
    const { getByTestId } = render(<NoExistTasks />);

    const title = getByTestId('no-exist-tasks-title');

    expect(title).toContainHTML('h3');
  });

  test('Deve conter o texto "Não existem notas adicionadas"', () => {
    const { getByTestId } = render(<NoExistTasks />);

    const title = getByTestId('no-exist-tasks-title').textContent;

    expect(title).toContain('Não existem notas adicionadas');
  });
});
