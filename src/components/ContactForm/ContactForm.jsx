import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContact } from '../../redux/contactsSlice';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const userName = values.name.trim();
    const userNumber = values.number.trim();

    dispatch(addContact({ name: userName, number: userNumber }));

    actions.resetForm();
  };

  const id = nanoid();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Потрібно додати більше букв!')
      .max(50, 'Занадто довгий текст!')
      .required('Потрібно заповнити поле'),
    number: Yup.string()
      .min(3, 'Потрібно додати більше цифр!')
      .max(50, 'Занадто довгий номер!')
      .required('Потрібно заповнити поле'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div className={style.wrap}>
          <label htmlFor={`name-${id}`}>Імʼя</label>
          <Field
            type='text'
            name='name'
            id={`name-${id}`}
            className={style.field}
            autoComplete='on'
            placeholder='Jack Robinson'
          />
          <ErrorMessage
            name='name'
            component='span'
            className={style.errorText}
          />
        </div>

        <div className={style.wrap}>
          <label htmlFor={`number-${id}`}>Телефон</label>
          <Field
            type='text'
            name='number'
            id={`number-${id}`}
            className={style.field}
            placeholder='000-00-00'
            autoComplete='on'
          />
          <ErrorMessage
            name='number'
            component='span'
            className={style.errorText}
          />
        </div>

        <Button variant='contained' color='success' type='submit'>
          Додати контакт
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;