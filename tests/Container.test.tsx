import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Container from '../src/components/Container';
import Button from '../src/components/Button';
import Icon from '../src/components/Icon';
import '@testing-library/jest-dom';
import { FaFacebook } from 'react-icons/fa';

describe('Container testing', () => {
  it('Container renders children with specific criteria', () => {
    render(
      <Container>
        <p>Test Content</p>
        <Button title="btn" type="button" className="something">
          <Icon iconComponent={FaFacebook} data-testid="img" />
        </Button>
      </Container>,
    );

    //Check if there is Test Content
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    //Check if there's an Button and have attrs like title,type and class
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('type', 'button');
    expect(btn).toHaveAttribute('title', 'btn');
    expect(btn).toHaveAttribute('class', 'something');

    //Check for svg in Button
    const myIcon = screen.queryByTestId('img');
    waitFor(() => {
      expect(myIcon).toHaveAttribute('iconComponent');
    });
  });

  it('IconContainer expects children and nested children', () => {
    render(
      <Container data-testid="main">
        <p data-testid="c1">Test Content</p>
        <Button title="btn" type="button" className="something" data-testid="c2">
          <Icon iconComponent={FaFacebook} data-testid="c3" />
        </Button>
      </Container>,
    );

    const container = screen.queryByTestId('main');
    const p = screen.queryByTestId('c1');
    const btn = screen.queryByTestId('c2');
    const icon = screen.queryByTestId('c3');
    waitFor(() => {
      expect(container).toContainElement(p);
      expect(container).toContainElement(btn);
      expect(btn).toContainElement(icon);
    });
  });
});
