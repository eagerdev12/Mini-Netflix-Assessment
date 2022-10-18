import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Main, Detail } from './pages';
import store from './store';
import Container from './containers';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Fragment>
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route exact path='/movie/:id' element={<Detail />} />
            </Routes>
          </Fragment>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
