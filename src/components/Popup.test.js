/* eslint-disable testing-library/no-container, testing-library/no-node-access */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popup from './Popup';

it('Pop up screen should popup when gameover and display score time', async () => {
  const user = userEvent.setup();

  render(<Popup />);

  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  await waitFor(async () => await user.type(input, 'Foobar'));

  expect(input.value).toBe('Foobar');

  await waitFor(async () => await user.click(button));

  expect(input.value).toBe('');
});
