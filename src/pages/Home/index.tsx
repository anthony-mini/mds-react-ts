import React, { useEffect } from 'react';
import { Header, Button, Select, Grid } from '../../components';

const filterGender = [
  { value: '0', label: 'All Gender' },
  { value: '1', label: 'Male' },
  { value: '2', label: 'Female' }
];

const filterAge = [
  { value: '0', label: 'Mixed Age' },
  { value: '1', label: 'Asc' },
  { value: '2', label: 'Desc' }
];

const Home: React.FC = () => {
  useEffect(() => {
    document.title = `React - TS - Webpack - Template`;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className="mx-6">
        <section className="flex">
          <div className="action-list">
            <div className="button">
              <Button text="Fetch Users" />
              <Button text="Clear Filter" />
            </div>
            <div className="select">
              <Select options={filterGender} />
              <Select options={filterAge} />
            </div>
          </div>
        </section>
        <section className="my-6">
          <Grid />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
