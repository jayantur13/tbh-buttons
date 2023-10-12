import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../src/components/Button';
import '@testing-library/jest-dom';

describe('Button testing', () => {
  it('Renders button with correct attributes and content', () => {
    render(
      <Button
        title="testButton"
        type="submit"
        className="btnAB"
        style={{ backgroundColor: '#ffffff' }}
        name="nameForForm"
        id="idForForm"
        value="myText"
      >
        Button AB
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Button AB');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('title', 'testButton');
    expect(button).toHaveAttribute('name', 'nameForForm');
    expect(button).toHaveAttribute('value', 'myText');
    expect(button).toHaveAttribute('id', 'idForForm');
    expect(button).toHaveClass('btnAB');
    expect(button).toHaveStyle('background-color: #ffffff');
  });

  it('Simulates onClick using title', () => {
    const onClickMock = jest.fn();

    render(
      <Button title="testButton" type="button" onClick={onClickMock}>
        Button A
      </Button>,
    );

    const button = screen.getByTitle('testButton');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Simulates onClick using role', () => {
    const onClickMock = jest.fn();

    render(
      <Button title="testButton" type="button" onClick={onClickMock}>
        Button B
      </Button>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Handles disabled state', () => {
    const onClickMock = jest.fn();

    render(
      <Button title="testButton" type="button" onClick={onClickMock} disabled={true}>
        Disabled Button
      </Button>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClickMock).not.toHaveBeenCalled(); // Ensure onClick is not called when disabled
    expect(button).toBeDisabled(); // Check if the button is disabled
  });
});
