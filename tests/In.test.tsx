import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better matchers
import IndicatorButton from '../src/components/IndicatorButton';

describe('IndicatorButton Component', () => {
  it('renders the button with initialText when not loaded', () => {
    render(
      <IndicatorButton
        title="Test Button"
        type="button"
        initialText="Click"
        loaded={false}
        successBgColor="green"
        failureBgColor="red"
        isSuccess={false}
        successText="Success!"
        failureText="Failure!"
      />,
    );

    waitFor(() => {
      const buttonElement = screen.getByText('Click');
      expect(buttonElement).toBeInTheDocument();
    });
  });

  it('renders the button with successText when loaded and isSuccess is true', () => {
    render(
      <IndicatorButton
        title="Test Button"
        type="button"
        initialText="Click Me"
        successText="Success!"
        loaded={true}
        isSuccess={true}
        successBgColor="green"
        failureBgColor="red"
        failureText="Failure!"
      />,
    );

    const buttonElement = screen.getByText('Success!');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the button with failureText when loaded and isSuccess is false', () => {
    render(
      <IndicatorButton
        title="Test Button"
        type="button"
        initialText="Click Me"
        failureText="Failure!"
        loaded={true}
        isSuccess={false}
        successBgColor="green"
        failureBgColor="red"
        successText="Success!"
      />,
    );

    const buttonElement = screen.getByText('Failure!');
    expect(buttonElement).toBeInTheDocument();
  });

  it('sets the background color to successBgColor when loaded, isSuccess is true', () => {
    render(
      <IndicatorButton
        title="Test Button"
        type="button"
        initialText="Click Me"
        successText="Success!"
        loaded={true}
        isSuccess={true}
        successBgColor="green"
        failureBgColor="red"
        failureText="Failure!"
        data-testid="indicator-button"
      />,
    );

    const buttonElement = screen.queryByTestId('indicator-button');
    expect(buttonElement).toHaveStyle('background-color: green');
  });

  it('sets the background color to failureBgColor when loaded, isSuccess is false', () => {
    render(
      <IndicatorButton
        title="Test Button"
        type="button"
        initialText="Click Me"
        failureText="Failure!"
        loaded={true}
        isSuccess={false}
        successBgColor="green"
        failureBgColor="red"
        successText="Success!"
        data-testid="indicator-button"
      />,
    );

    const buttonElement = screen.queryByTestId('indicator-button');
    expect(buttonElement).toHaveStyle('background-color: red');
  });

  it('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(
      <IndicatorButton
        title="Test Button"
        type="button"
        initialText="Click Me"
        onClick={onClickMock}
        successBgColor="green"
        failureBgColor="red"
        successText="Success!"
        failureText="Failure!"
        loaded={false}
        isSuccess={true}
      />,
    );

    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
