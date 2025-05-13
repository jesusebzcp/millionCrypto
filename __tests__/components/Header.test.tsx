import React from 'react';
import {render} from '@testing-library/react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '@pr/components/Header';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(),
}));

jest.mock('../../src/application/lib/formatDate', () => ({
  formatDate: jest.fn((date: Date) => `Mocked Date: ${date.toDateString()}`),
}));

describe('Header component', () => {
  beforeEach(() => {
    (useSafeAreaInsets as jest.Mock).mockReturnValue({top: 20});
  });

  it('renders logo, "Last update" text, and formatted date', () => {
    const testDate = new Date('2024-05-13T10:00:00Z');
    const {getByText} = render(<Header lastUpdate={testDate} />);

    expect(getByText('Last update')).toBeTruthy();
    expect(getByText(`Mocked Date: ${testDate.toDateString()}`)).toBeTruthy();
  });

  it('applies top margin from safe area insets', () => {
    const testDate = new Date();
    const {UNSAFE_getByType} = render(<Header lastUpdate={testDate} />);
    //@ts-ignore
    const headerView = UNSAFE_getByType('View');

    expect(headerView.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({marginTop: 20})]),
    );
  });
});
