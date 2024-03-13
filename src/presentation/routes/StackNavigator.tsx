import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreens} from '../screens/products/ProductsScreens';
import {SettingsScreen} from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreens} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
