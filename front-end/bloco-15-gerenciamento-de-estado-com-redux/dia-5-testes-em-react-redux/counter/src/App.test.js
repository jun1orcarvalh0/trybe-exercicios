// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

// src/App.test.js
// ...
describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  test('the page should have a button and a text 5', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
  
    expect(screen.getByText('5')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(screen.getByText('0')).toBeInTheDocument();
    userEvent.click(buttonAdicionar)

    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.click(buttonAdicionar)
    expect(screen.getByText('2')).toBeInTheDocument();
  })
  test('counter starting in 10 and increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(screen.getByText('10')).toBeInTheDocument();

    userEvent.click(buttonAdicionar)

    expect(screen.getByText('11')).toBeInTheDocument();

    userEvent.click(buttonAdicionar)
    expect(screen.getByText('12')).toBeInTheDocument();
  });
});