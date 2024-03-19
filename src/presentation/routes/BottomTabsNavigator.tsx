import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabOneScreen} from '../screens/tabs/TabOneScreen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabsNavigator.tsx';
import {StackNavigator} from './StackNavigator.tsx';
import {IonIcon} from '../components/shared/IonIcon.tsx';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: globalColors.background}}
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: globalColors.primary,
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
          tabBarIcon: ({color}) => (
            <IonIcon name="american-football-outline" color={color} />
          ),
        }}
        component={TabOneScreen}
      />
      <Tab.Screen
        name="TabTwo"
        options={{
          title: 'Tab 2',
          tabBarIcon: ({color}) => (
            <IonIcon name="airplane-outline" color={color} />
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="TabThree"
        options={{
          title: 'Tab 3',
          tabBarIcon: ({color}) => (
            <IonIcon name="albums-outline" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
