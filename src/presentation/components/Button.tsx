import {Colors} from '@pr/theme/Colors';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  label: string;
  onPress: () => void;
};

export const Button = ({label, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style ?? {}]}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundLight,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
});
