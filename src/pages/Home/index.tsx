import React, { useEffect } from 'react';
import { Header, Button, Select } from '../../components';
import SVGMemes from '../../assets/doge-hand-drawn.svg';

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
          <aside>
            <img
              className="animate-blink mt-6 mb-0 ml-8 mr-0 w-20"
              src={SVGMemes}
              alt="dog-memes"
            />
          </aside>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
