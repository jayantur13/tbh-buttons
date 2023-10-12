import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Icon from '../src/components/Icon';
import '@testing-library/jest-dom';
import Container from '../src/components/Container';
import Button from '../src/components/Button';
import { FaFacebook } from 'react-icons/fa';

describe('Icon testing', () => {
  it('Has specific react-icon', () => {
    render(
      <Container>
        <p>Test Content</p>
        <Button title="btn" type="button" className="something">
          <Icon iconComponent={FaFacebook} data-testid="img" />
        </Button>
      </Container>,
    );
    //Check for svg in Button
    const myIcon = screen.queryByTestId('img');
    waitFor(() => {
      expect(myIcon).toHaveAttribute('iconComponent', 'FaFacebook');
    });
  });
});
