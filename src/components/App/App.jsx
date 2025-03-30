import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../redux/store';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className={styles.app}>
        <h2>📖 Книга контактів</h2>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </PersistGate>
  );
};

export default App;
