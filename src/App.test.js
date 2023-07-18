import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Clock
// User click display dropdown menu
it('should display dropdown menu when click on photo', async () => {
  const user = userEvent.setup();

  render(<App />);

  const appScreen = screen.getByTestId('App');

  const box = screen.getByTestId('box');
  const menu = screen.getByTestId('menu');

  await waitFor(async () => await user.click(appScreen));

  const boxStyles = getComputedStyle(box);
  const menuStyles = getComputedStyle(menu);

  expect(boxStyles.display).toBe('block');
  expect(menuStyles.display).toBe('block');
});

// User click outside of menu to hide menu
it('should hide dropdown menu when click outside of it', async () => {
  const user = userEvent.setup();

  render(<App />);

  const appScreen = screen.getByTestId('App');
  const box = screen.getByTestId('box');
  const menu = screen.getByTestId('menu');

  await waitFor(async () => await user.click(appScreen));
  await waitFor(async () => await user.click(appScreen));

  const boxStyles = getComputedStyle(box);
  const menuStyles = getComputedStyle(menu);

  expect(boxStyles.display).toBe('none');
  expect(menuStyles.display).toBe('none');
});

// User click non-target select menu name will hide menu
it('should hide dropdown menu when select menu name from non-target click', async () => {
  const user = userEvent.setup();

  render(<App />);

  const appScreen = screen.getByTestId('App');
  const box = screen.getByTestId('box');
  const menu = screen.getByTestId('menu');

  await waitFor(async () => await user.click(appScreen));

  const menuNames = screen.getAllByRole('listitem');

  await waitFor(async () => await user.click(menuNames[0]));

  const boxStyles = getComputedStyle(box);
  const menuStyles = getComputedStyle(menu);

  expect(boxStyles.display).toBe('none');
  expect(menuStyles.display).toBe('none');
});
// User click target select wrong menu name will hide menu
it('should hide dropdown menu when select incorrect menu name from target click', async () => {
  const user = userEvent.setup();

  const { container } = render(<App />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const target = container.getElementsByClassName('Target');
  const box = screen.getByTestId('box');
  const menu = screen.getByTestId('menu');

  await waitFor(async () => await user.click(target[0].childNodes[0]));

  const menuNames = screen.getAllByRole('listitem');

  await waitFor(async () => await user.click(menuNames[1]));

  const boxStyles = getComputedStyle(box);
  const menuStyles = getComputedStyle(menu);

  expect(boxStyles.display).toBe('none');
  expect(menuStyles.display).toBe('none');
});
// User click target select correct menu name will change photo

describe.only('Click on target and select correct name', () => {
  it('should hide dropdown menu', async () => {
    const user = userEvent.setup();

    const { container } = render(<App />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const target = container.getElementsByClassName('Target');
    const box = screen.getByTestId('box');
    const menu = screen.getByTestId('menu');

    await waitFor(async () => await user.click(target[0].childNodes[0]));

    const menuNames = screen.getAllByRole('listitem');

    await waitFor(async () => await user.click(menuNames[0]));

    const boxStyles = getComputedStyle(box);
    const menuStyles = getComputedStyle(menu);

    expect(boxStyles.display).toBe('none');
    expect(menuStyles.display).toBe('none');
  });

  it('should change photo and text style', async () => {
    const user = userEvent.setup();

    const { container } = render(<App />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const target = container.getElementsByClassName('Target');
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const frames = container.getElementsByClassName('Photo');

    await waitFor(async () => await user.click(target[0].childNodes[0]));

    const menuNames = screen.getAllByRole('listitem');

    await waitFor(async () => await user.click(menuNames[0]));

    const frameStyles = getComputedStyle(frames[0]);

    expect(frameStyles.filter).toBe('brightness(50%)');
    expect(frameStyles.color).toBe('lightgrey');
  });
});
// Clock should stop when gameover
// Popup screen when gameover
// Popup scree should display finish time
// Input should display user type in
// Input should reset after submit score
