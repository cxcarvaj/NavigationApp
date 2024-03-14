import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabOneScreen} from '../screens/tabs/TabOneScreen';
import {TabTwoScreen} from '../screens/tabs/TabTwoScreen';
import {TabThreeScreen} from '../screens/tabs/TabThreeScreen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: globalColors.background}}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="TabOne"
        options={{
          title: 'Tab 1',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab 1</Text>,
        }}
        component={TabOneScreen}
      />
      <Tab.Screen
        name="TabTwo"
        options={{
          title: 'Tab 2',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab 2</Text>,
        }}
        component={TabTwoScreen}
      />
      <Tab.Screen
        name="TabThree"
        options={{
          title: 'Tab 3',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab 3</Text>,
        }}
        component={TabThreeScreen}
      />
    </Tab.Navigator>
  );
};
