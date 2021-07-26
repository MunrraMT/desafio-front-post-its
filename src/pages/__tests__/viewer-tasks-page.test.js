import { render } from '@testing-library/react';
import ViewerTasksPage from '../viewer-tasks-page';

describe('Deve testar o componente AddNewTaskPage', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<ViewerTasksPage />);
  });

  test('Deve conter um indicativo de "Não existem notas adicionadas"', () => {
    const { getByText } = render(<ViewerTasksPage />);

    const form = getByText('Não existem notas adicionadas');

    expect(form).toBeInTheDocument();
  });

  test('Deve conter um button para adicionar uma nova nota', () => {
    const { getByText } = render(<ViewerTasksPage />);

    const form = getByText('nova nota');

    expect(form).toBeInTheDocument();
  });
});
