import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu.tsx';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <>
      <HamburgerMenu />
      <View style={globalStyles.container}>
        <PrimaryButton
          onPress={() => navigation.navigate('Products')}
          label={'Products'}
        />
        <PrimaryButton
          onPress={() => navigation.navigate('Settings')}
          label={'Settings'}
        />
      </View>
    </>
  );
};
