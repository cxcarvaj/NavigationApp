import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu.tsx';
import {IonIcon} from '../../components/shared/IonIcon.tsx';

export const TabOneScreen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>TabOneScreen</Text>
      <IonIcon name="rocket-outline" />
    </View>
  );
};
