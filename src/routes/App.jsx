import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import MainInicio from '../containers/MainInicio';
import '../styles/breakpoints/MediaQueries.css';
import '../styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainInicio} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
