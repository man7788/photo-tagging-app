/* eslint-disable testing-library/no-container, testing-library/no-node-access */

import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Clock from './Clock';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

it('Clock should display time', async () => {
  const { container } = render(<Clock gameover={false} />);

  act(() => {
    jest.runAllTimers();
  });

  act(() => {
    jest.runAllTimers();
  });

  act(() => {
    jest.runAllTimers();
  });

  const clock = container.getElementsByClassName('Clock');

  expect(clock[0].textContent).toBe('00:00:03');
});

it('Clock should stop counting if gameover', async () => {
  const mockFn = jest.fn();

  const { container, rerender } = render(
    <Clock gameover={false} setPopupDisplay={mockFn} setScore={mockFn} />
  );

  const clock = container.getElementsByClassName('Clock');

  act(() => {
    jest.runAllTimers();
  });

  expect(clock[0].textContent).toBe('00:00:01');

  rerender(
    <Clock gameover={true} setPopupDisplay={mockFn} setScore={mockFn} />
  );

  act(() => {
    jest.runAllTimers();
  });

  expect(clock[0].textContent).toBe('00:00:01');
});
