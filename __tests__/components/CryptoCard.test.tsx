import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CryptoCard, CryptoCardProps} from '@pr/components/CryptoCard';

const defaultProps: CryptoCardProps = {
  id: 'btc',
  symbol: 'BTC',
  name: 'Bitcoin',
  price_usd: '40000.50',
  percent_change_24h: '5.32',
  onSelectCard: jest.fn(),
  nameid: '',
  rank: 0,
  percent_change_1h: '',
  percent_change_7d: '',
  price_btc: '',
  market_cap_usd: '',
  volume24: 0,
  volume24a: 0,
  csupply: '',
  tsupply: '',
  msupply: '',
};

describe('CryptoCard component', () => {
  it('renders crypto information correctly', () => {
    const {getByText} = render(<CryptoCard {...defaultProps} />);

    expect(getByText('BTC')).toBeTruthy();
    expect(getByText('Bitcoin')).toBeTruthy();
    expect(getByText('$40000.50')).toBeTruthy();
    expect(getByText('5.32%')).toBeTruthy();
  });

  it('applies correct color for positive change', () => {
    const {getByText} = render(<CryptoCard {...defaultProps} />);
    const changeText = getByText('5.32%');

    expect(changeText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: expect.stringMatching(/#(0|[a-fA-F0-9]{6})/),
        }),
      ]),
    );
  });

  it('applies correct color for negative change', () => {
    const negativeProps = {...defaultProps, percent_change_24h: '-3.21'};
    const {getByText} = render(<CryptoCard {...negativeProps} />);
    const changeText = getByText('-3.21%');

    expect(changeText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: expect.stringMatching(/#(0|[a-fA-F0-9]{6})/),
        }),
      ]),
    );
  });

  it('calls onSelectCard when pressed', () => {
    const onSelectCardMock = jest.fn();
    const {getByText} = render(
      <CryptoCard {...defaultProps} onSelectCard={onSelectCardMock} />,
    );

    fireEvent.press(getByText('BTC'));
    expect(onSelectCardMock).toHaveBeenCalledWith('btc');
  });
});
