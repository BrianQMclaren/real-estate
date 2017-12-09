import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Index from './Index';

const renderApp = () => {
  render(
    <BrowserRouter>
      <AppContainer>
        <Index />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('app')
  );
};
renderApp();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Index', () => {
    renderApp();
  });
}
