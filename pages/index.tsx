import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Auth from './components/Auth';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>hello world</h1>
      <Auth />
    </div>
  );
};

export default Home;
