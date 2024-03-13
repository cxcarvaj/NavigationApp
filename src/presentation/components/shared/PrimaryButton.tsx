import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface PrimaryButtonProps {
  label: String;
  onPress: () => void;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const {label, onPress} = props;

  return (
    <Pressable onPress={onPress} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
