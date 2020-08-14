import React from 'react';

import styles from './SearchCard.module.css';

export default function SearchCard() {
  return (
      <div className={ styles.mainContainer }>
          <form className={ styles.formContainer }>
              <label></label>
              <input type='text' placeholder='Filter by title, benefits, companies, expertise' />
              <label></label>
              <input type='text' placeholder='Filter by title, benefits, companies, expertise' />
              <input type=''/>
              <label>Full Time Only</label>
          </form>
      </div>
  );
}
