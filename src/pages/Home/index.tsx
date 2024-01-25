import React, { useEffect } from 'react';
import { Header } from '../../components';

const Home = () => {
  useEffect(() => {
    document.title = `React - TS - Webpack - Template`;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className="p-3"></main>
    </React.Fragment>
  );
};

export default Home;
