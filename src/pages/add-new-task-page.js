/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import BtnAddNotas from '../components/btn-add-notas';
import BtnVerNotas from '../components/btn-ver-notas';

const AddNewTaskPage = () => {
  const [newTask, setNewTask] = useState({});
  const [feedbackPost, setFeedbackPost] = useState('');

  const ShowModal = () => {
    if (feedbackPost === '') return <aside />;

    return (
      <aside>
        <h3>{feedbackPost}</h3>
        <BtnVerNotas />
        <BtnAddNotas />
      </aside>
    );
  };

  const showResponseAPI = (response) => {
    if (response === 'error')
      return setFeedbackPost('Nota não criada, sem conexão com o servido');

    if (
      response.assunto !== newTask.assunto &&
      response.texto !== newTask.texto
    ) {
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

  const showError = (message) => <p>{message}</p>;

  const sendSchema = Yup.object().shape({
    assunto: Yup.string()
      .min(3, 'Precisa ter no mínino 3 letras!')
      .max(50, 'No máximo 50 caracteres!')
      .required('Precisa ter uma assunto!'),
    texto: Yup.string()
      .min(10, 'Precisa ter no mínino 10 letras!')
      .max(150, 'No máximo 150 caracteres!')
      .required('Precisa ter um texto!')
  });

  return (
    <>
      <main>
        <h2>Bloco de notas</h2>
        <Formik
          initialValues={{
            assunto: '',
            texto: ''
          }}
          onSubmit={formSubmit}
          validationSchema={sendSchema}
        >
          {() => (
            <Form>
              <Field name='assunto' type='text' placeholder='Assunto.' />
              <ErrorMessage name='assunto' render={showError} />
              <Field name='texto' as='textarea' placeholder='Texto.' />
              <ErrorMessage name='texto' render={showError} />
              <button className='btn-submit-task' type='submit'>
                criar nota
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
