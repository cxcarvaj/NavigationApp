import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabOneScreen} from '../screens/tabs/TabOneScreen';
import {TabTwoScreen} from '../screens/tabs/TabTwoScreen';
import {TabThreeScreen} from '../screens/tabs/TabThreeScreen';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabOne" component={TabOneScreen} />
      <Tab.Screen name="TabTwo" component={TabTwoScreen} />
      <Tab.Screen name="TabThree" component={TabThreeScreen} />
    </Tab.Navigator>
  );
};
