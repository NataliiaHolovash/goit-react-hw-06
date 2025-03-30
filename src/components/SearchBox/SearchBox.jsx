import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <div className={styles.search}>
      <input type="text" value={filter} onChange={(e) => dispatch(changeFilter(e.target.value))} placeholder="🔎 Пошук" className={styles.input} />
    </div>
  );
};

export default SearchBox;
