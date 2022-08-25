// src/App.test.js

import { waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from './App';
import renderWithRedux from './helper';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    renderWithRedux(<App />);
    const buttonDoguinho = screen.queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    userEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});