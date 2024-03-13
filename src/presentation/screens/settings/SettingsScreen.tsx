import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings Screen</Text>

      <PrimaryButton label="Go back" onPress={() => navigation.goBack()} />

      <PrimaryButton
        label="Go Back to Home"
        onPress={() => navigation.dispatch(StackActions.popToTop)}
      />
    </View>
  );
};
