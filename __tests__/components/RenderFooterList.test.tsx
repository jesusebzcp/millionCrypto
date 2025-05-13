import React from 'react';
import {render} from '@testing-library/react-native';
import {RenderFooterList} from '@pr/components/RenderFooterList';

describe('RenderFooterList component', () => {
  it('renders ActivityIndicator when isFetchingNextPage is true', () => {
    const {getByTestId} = render(
      <RenderFooterList isFetchingNextPage={true} />,
    );

    const indicator = getByTestId('activity-indicator');
    expect(indicator).toBeTruthy();
  });

  it('returns null when isFetchingNextPage is false', () => {
    const {queryByTestId} = render(
      <RenderFooterList isFetchingNextPage={false} />,
    );

    const indicator = queryByTestId('activity-indicator');
    expect(indicator).toBeNull();
  });
});
