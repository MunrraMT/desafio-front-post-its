/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import BtnAddNotas from '../components/btn-add-notas';
import BtnVerNotas from '../components/btn-ver-notas';

const AddNewTaskPage = () => {
  const [newTask, setNewTask] = useState({});
  const [feedbackPost, setFeedbackPost] = useState('');
  const history = useHistory();

  const ShowModal = () => {
    if (feedbackPost === '') return <aside />;

    return (
      <aside className='show-modal__content'>
        <h3 className='show-modal__title'>{feedbackPost}</h3>
        <BtnVerNotas />
        <BtnAddNotas />
      </aside>
    );
  };

  const showResponseAPI = (response) => {
    if (response === 'error')
      return setFeedbackPost('Nota não criada, sem conexão com o servido');

    if (response.title !== newTask.title && response.text !== newTask.text) {
      return setFeedbackPost('Nota não criada, tente novamente mais tarde');
    }

    return setFeedbackPost('Nota criada com sucesso!');
  };

  const formSubmit = (values) => {
    setNewTask(values);

    fetch('http://localhost:5000/addtask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
      .then((response) => showResponseAPI(response))
      .catch(showResponseAPI('error'));
  };

  const showError = (message) => (
    <p className='add-new-task__error'>{message}</p>
  );

  const sendSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'Precisa ter no mínino 3 letras!')
      .max(50, 'No máximo 50 caracteres!')
      .required('Precisa ter uma assunto!'),
    text: Yup.string()
      .min(10, 'Precisa ter no mínino 10 letras!')
      .max(150, 'No máximo 150 caracteres!')
      .required('Precisa ter um texto!')
  });

  const backHome = () => {
    history.push('/');
  };

  return (
    <>
      <main className='add-new-task__content'>
        <h2 className='add-new-task__h2'>Bloco de notas</h2>
        <Formik
          initialValues={{
            title: '',
            text: ''
          }}
          onSubmit={formSubmit}
          validationSchema={sendSchema}
        >
          {() => (
            <Form className='add-new-task__form'>
              <Field
                className='add-new-task__title'
                name='title'
                type='text'
                placeholder='Assunto.'
              />
              <ErrorMessage name='title' render={showError} />
              <Field
                className='add-new-task__text'
                name='text'
                as='textarea'
                placeholder='Texto.'
              />
              <ErrorMessage name='text' render={showError} />
              <button className='add-new-task__btn' type='submit'>
                criar nota
              </button>

              <button
                onClick={backHome}
                className='add-new-task__btn'
                type='button'
              >
                voltar
              </button>
            </Form>
          )}
        </Formik>
      </main>
      <ShowModal />
    </>
  );
};

export default AddNewTaskPage;
