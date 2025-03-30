import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert('Будь ласка, введіть ім’я та номер телефону!');
      return;
    }

    dispatch(addContact({ id: Date.now(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleAddContact} className={styles.form}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ім’я" className={styles.input} />
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Номер телефону" className={styles.input} />
      <button type="submit" className={styles.button}>➕ Додати</button>
    </form>
  );
};

export default ContactForm;
