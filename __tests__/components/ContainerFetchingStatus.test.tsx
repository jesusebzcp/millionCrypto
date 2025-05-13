import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import {ContainerFetchingStatus} from '@pr/components/ContainerFetchingStatus';

describe('ContainerFetchingStatus component', () => {
  it('renders loading state correctly', () => {
    const {getByText} = render(
      <ContainerFetchingStatus loading={true} error={false} onRetry={jest.fn()}>
        <Text>Child Content</Text>
      </ContainerFetchingStatus>,
    );

    expect(getByText('Loading...')).toBeTruthy();
    expect(getByText('Child Content')).toBeTruthy();
  });

  it('renders error state with retry button', () => {
    const onRetryMock = jest.fn();

    const {getByText} = render(
      <ContainerFetchingStatus
        loading={false}
        error={true}
        onRetry={onRetryMock}>
        <Text>Child Content</Text>
      </ContainerFetchingStatus>,
    );

    expect(getByText('Oops...')).toBeTruthy();
    expect(getByText('an error occurred while querying the data')).toBeTruthy();
    expect(getByText('Retry')).toBeTruthy();

    // Test button press
    fireEvent.press(getByText('Retry'));
    expect(onRetryMock).toHaveBeenCalledTimes(1);
  });

  it('renders children when not loading or error', () => {
    const {getByText, queryByText} = render(
      <ContainerFetchingStatus
        loading={false}
        error={false}
        onRetry={jest.fn()}>
        <Text>Visible Child</Text>
      </ContainerFetchingStatus>,
    );

    expect(getByText('Visible Child')).toBeTruthy();

    // Ensure loading/error views are not rendered
    expect(queryByText('Loading...')).toBeNull();
    expect(queryByText('Oops...')).toBeNull();
  });
});
