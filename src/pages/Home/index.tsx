import React, { useEffect } from 'react';
import { Header, Button } from '../../components';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = `React - TS - Webpack - Template`;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section>
          <div className="actionList">
            <Button text="Fetch Users" />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
