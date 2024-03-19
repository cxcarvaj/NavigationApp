import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu.tsx';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabOneScreen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>TabOneScreen</Text>
      <Icon name="rocket-outline" size={30} color="#900" />
    </View>
  );
};
