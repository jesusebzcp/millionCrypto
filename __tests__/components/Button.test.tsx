import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '@pr/components/Button';

describe('Button component', () => {
  it('renders correctly with given label', () => {
    const {getByText} = render(<Button label="Click Me" onPress={() => {}} />);

    const buttonLabel = getByText('Click Me');
    expect(buttonLabel).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button label="Press Me" onPress={onPressMock} />,
    );

    const button = getByText('Press Me');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
