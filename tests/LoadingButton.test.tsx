import React, { MouseEventHandler } from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoadingButton from '../src/components/LoadingButton';
import '@testing-library/jest-dom';
import { FaSpinner, FaCheck, FaArrowDown } from 'react-icons/fa';

describe('LoadingButton', () => {
  jest.mock('react-icons/fa', () => ({
    FaSpinner: () => <span>FaSpinner</span>,
    FaCheck: () => <span>FaCheck</span>,
    FaArrowDown: () => <span>FaArrowDown</span>,
  }));

  it('renders loading icon when loading is true', () => {
    render(
      <LoadingButton
        type="button"
        title="11"
        variant="icon"
        loading={true}
        loadingIcon={<FaCheck />} // Use your mocked icon here
        icon={<FaSpinner />} // Use your mocked icon here
        data-testid="img"
      />,
    );

    const myIcon = screen.queryByTestId('img');
    waitFor(() => {
      expect(myIcon).toHaveTextContent('FaCheck');
    });
  });

  it('renders loaded icon when loaded is true', () => {
    render(
      <LoadingButton
        type="button"
        title="22"
        variant="icon"
        loaded={true}
        loadedIcon={<FaArrowDown />} // Use your mocked icon here
        icon={<FaSpinner />} // Use your mocked icon here
        data-testid="img"
      />,
    );

    const myIcon = screen.queryByTestId('img');
    waitFor(() => {
      expect(myIcon).toHaveTextContent('FaArrowDown');
    });
  });

  it('renders default icon when neither loading nor loaded', () => {
    render(
      <LoadingButton
        type="button"
        title="33"
        variant="icon"
        icon={<FaSpinner />} // Use your mocked icon here
        data-testid="img"
      />,
    );

    const myIcon = screen.queryByTestId('img');
    waitFor(() => {
      expect(myIcon).toHaveTextContent('FaSpinner');
    });
  });

  // Define mock event handlers and props

  const mockClick: MouseEventHandler<HTMLButtonElement> = event => {
    // Simulate a button click
    fireEvent.click(event.target as HTMLButtonElement);

    // Example assertion:
    expect(screen.getByTitle('button title3')).toBeInTheDocument();
  };

  it('renders as text variant', () => {
    render(<LoadingButton variant="text" text="Button Text" title="Button Title" type="button" />);

    // Assert that the text is present and the icon is not
    expect(screen.getByText('Button Text')).toBeInTheDocument();
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  it('renders as icon variant', () => {
    const iconLdbtn = {
      loading: false,
      loaded: true,
    };

    render(
      <LoadingButton
        variant="icon"
        type="button"
        title="loadingbtn_1"
        icon={<FaSpinner data-testid="img1" />}
        loadingIcon={<FaSpinner data-testid="img2" />}
        loadedIcon={<FaCheck data-testid="img3" />}
        loading={iconLdbtn.loading}
        loaded={iconLdbtn.loaded}
        onClick={() => {
          // Mock click handler if needed
        }}
        style={{ fontSize: '1rem' }}
        className="bg-blue-400 hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full flex items-center justify-center"
      />,
    );

    waitFor(() => {
      expect(screen.getByTestId('img1')).toBeInTheDocument();
      expect(screen.getByTestId('img3')).toBeInTheDocument();
    });

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Loaded!')).not.toBeInTheDocument();
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('renders as icontext variant', () => {
    render(
      <LoadingButton
        variant="icontext"
        icon={<FaSpinner />}
        title="Button Title"
        type="button"
        text="Button Text"
        loadingIcon={<FaSpinner />}
        loadingText="Loading..."
        loadedIcon={<FaSpinner />}
        loadedText="Loaded"
        loading={false}
        loaded={true}
      />,
    );

    // Assert that the icon is present and the text
    waitFor(() => {
      expect(screen.getByRole('button')).toHaveAttribute('icon', 'FaFacebook');
      expect(screen.getByRole('button')).toHaveAttribute('text', 'Button Text');
    });

    expect(screen.getByRole('button')).not.toHaveTextContent('Loading...');
  });

  it('disables the button when loading', () => {
    render(
      <LoadingButton
        variant="text"
        text="Click me"
        loading={true}
        loaded={false}
        loadingText="Loading..."
        loadedText="Loaded"
        title="button title2"
        type="button"
        disabled={true}
      />,
    );

    const button = screen.getByTitle('button title2');
    expect(button.closest('button')).toBeDisabled();
  });

  it('displays initial text', () => {
    render(
      <LoadingButton
        variant="text"
        text="Initial Text"
        loadingText="Loading..."
        loadedText="Loaded"
        loading={false}
        loaded={false}
        title="button title11"
        type="button"
        onClick={() => {}}
      />,
    );

    expect(screen.getByText('Initial Text')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Loaded')).not.toBeInTheDocument();
  });

  it('displays loading text while loading', () => {
    render(
      <LoadingButton
        variant="text"
        text="Initial Text"
        loadingText="Loading..."
        loadedText="Loaded"
        loading={true}
        loaded={false}
        title="button title12"
        type="button"
      />,
    );

    expect(screen.queryByText('Initial Text')).not.toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByText('Loaded')).not.toBeInTheDocument();
  });

  it('displays loaded text after loading', () => {
    const { rerender } = render(
      <LoadingButton
        variant="text"
        text="Initial Text"
        loadingText="Loading..."
        loadedText="Loaded"
        loading={false}
        loaded={true}
        title="button title13"
        type="button"
      />,
    );

    expect(screen.queryByText('Initial Text')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Loaded')).toBeInTheDocument();

    // You can also test the transition from loading to loaded by rerendering with different props
    rerender(
      <LoadingButton
        variant="text"
        text="Initial Text"
        loadingText="Loading..."
        loadedText="Loaded"
        loading={false}
        loaded={true}
        title="button title14"
        type="button"
      />,
    );

    expect(screen.queryByText('Initial Text')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  });

  it('displays initial text after unloading', () => {
    const { rerender } = render(
      <LoadingButton
        variant="text"
        text="Initial Text"
        type="button"
        title="ss2"
        loadingText="Loading..."
        loadedText="Loaded"
        loading={false}
        loaded={true}
      />,
    );

    expect(screen.queryByText('Initial Text')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Loaded')).toBeInTheDocument();

    // Simulate unloading by setting loaded to false
    rerender(
      <LoadingButton
        variant="text"
        text="Initial Text"
        type="button"
        title="ss"
        loadingText="Loading..."
        loadedText="Loaded"
        loading={false}
        loaded={false}
      />,
    );

    expect(screen.getByText('Initial Text')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Loaded')).not.toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    render(
      <LoadingButton
        variant="text"
        text="Click me"
        loading={false}
        loaded={false}
        loadingText="Loading..."
        loadedText="Loaded"
        title="button title3"
        type="button"
        onClick={mockClick}
      />,
    );
  });

  it('renders loading content when loading is true', () => {
    render(
      <LoadingButton
        variant="icontext"
        loading={true}
        loadingIcon={<span>Loading Icon</span>}
        loadingText="Loading Text"
        icon={<span>Icon</span>}
        text="Text"
        title="button title3"
        type="button"
      />,
    );

    expect(screen.getByText('Loading Icon')).toBeInTheDocument();
    expect(screen.getByText('Loading Text')).toBeInTheDocument();
    expect(screen.queryByText('Icon')).toBeNull(); // Ensure the icon and text are not rendered
    expect(screen.queryByText('Text')).toBeNull();
  });

  it('renders loaded content when loaded is true', () => {
    render(
      <LoadingButton
        variant="icontext"
        loaded={true}
        loadedIcon={<span>Loaded Icon</span>}
        loadedText="Loaded Text"
        icon={<span>Icon</span>}
        text="Text"
        title="button title3"
        type="button"
      />,
    );

    expect(screen.getByText('Loaded Icon')).toBeInTheDocument();
    expect(screen.getByText('Loaded Text')).toBeInTheDocument();
    expect(screen.queryByText('Icon')).toBeNull(); // Ensure the icon and text are not rendered
    expect(screen.queryByText('Text')).toBeNull();
  });

  it('renders default content when neither loading nor loaded', () => {
    render(
      <LoadingButton
        variant="icontext"
        icon={<span>Icon</span>}
        text="Text"
        title="button title3"
        type="button"
      />,
    );

    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.queryByText('Loading Icon')).toBeNull(); // Ensure loading content is not rendered
    expect(screen.queryByText('Loading Text')).toBeNull();
    expect(screen.queryByText('Loaded Icon')).toBeNull(); // Ensure loaded content is not rendered
    expect(screen.queryByText('Loaded Text')).toBeNull();
  });
});
