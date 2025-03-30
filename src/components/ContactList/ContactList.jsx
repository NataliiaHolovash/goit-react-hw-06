import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <span>{contact.name}: {contact.number}</span>
          <button onClick={() => dispatch(deleteContact(contact.id))} className={styles.deleteButton}>🗑 Видалити</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
