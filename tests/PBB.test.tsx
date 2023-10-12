import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import PBButton from '../src/components/PBButton';
import '@testing-library/jest-dom';
import { FaSpinner } from 'react-icons/fa';

describe('PBB testing', () => {
  jest.mock('react-icons/fa', () => ({
    FaSpinner: () => <span>FaSpinner</span>,
  }));
  it('Render PBButton with inital text', () => {
    render(
      <PBButton
        buttonText="Click me"
        useType="linear"
        type="button"
        title="1"
        loading={false}
        data-testid="linear-progress"
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click me');
  });

  it('Render PBButton with linear progress at the top', () => {
    render(
      <PBButton
        buttonText="Click me"
        useType="linear"
        type="button"
        title="1"
        placeProgress="top"
        loading={true}
        progressText="DL"
        data-testid="linear-progress"
        color="primary"
      />,
    );

    const linearProgress = screen.queryByTestId('linear-progress');
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    waitFor(() => {
      expect(linearProgress).toBeInTheDocument();
      expect(button).toHaveTextContent('DL');
      const progressContainer = screen.getByTestId('progress-container');
      expect(progressContainer.firstChild).toBe(linearProgress);
    });

    expect(button).toBeDisabled();
  });

  it('Render PBButton with linear progress at the bottom', () => {
    render(
      <PBButton
        buttonText="Click me"
        useType="linear"
        type="button"
        title="1"
        placeProgress="bottom"
        loading={true}
        progressText="DL"
        data-testid="linear-progress"
        color="primary"
      />,
    );

    const linearProgress = screen.queryByTestId('linear-progress');
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    waitFor(() => {
      expect(linearProgress).toBeInTheDocument();
      expect(button).toHaveTextContent('DL');
      const progressContainer = screen.getByTestId('progress-container');
      expect(progressContainer).toBeInTheDocument();
    });
    expect(button).toBeDisabled();
  });

  it('Render PBButton with icon for circular progress', () => {
    render(
      <PBButton
        data-testid="circular-progress"
        useType="circular"
        type="button"
        title="2"
        loading={false}
        icon={<FaSpinner />}
      />,
    );

    const circularProgress = screen.queryByTestId('circular-progress');
    waitFor(() => {
      expect(circularProgress).toBeInTheDocument();
      expect(circularProgress).toHaveTextContent('FaSpinner');
    });
  });

  it('Render PBButton with circular progress', () => {
    render(
      <PBButton
        data-testid="circular-progress"
        useType="circular"
        type="button"
        title="2"
        loading={true}
        color="primary"
        size={24}
        icon={<FaSpinner />}
      />,
    );

    const circularProgress = screen.queryByTestId('circular-progress');
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    waitFor(() => {
      expect(circularProgress).toBeInTheDocument();
      expect(button).toHaveAttribute('color', 'primary');
      expect(button).toHaveAttribute('size', 24);
    });
    expect(button).toBeDisabled();
  });

  it('Render PBButton without progress', () => {
    render(
      <PBButton buttonText="Click me" useType="linear" type="button" title="3" loading={false} />,
    );

    const linearProgress = screen.queryByTestId('linear-progress');
    expect(linearProgress).toBeNull();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  it('Click event handler is called when button is clicked', () => {
    const onClickMock = jest.fn();
    render(
      <PBButton
        buttonText="Click me"
        placeProgress="top"
        progressText="DL"
        useType="linear"
        type="button"
        title="4"
        onClick={onClickMock}
      />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
