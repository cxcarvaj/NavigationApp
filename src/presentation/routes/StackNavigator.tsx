import {createStackNavigator} from '@react-navigation/stack';

import {ProductScreen} from '../screens/products/ProductScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreens} from '../screens/products/ProductsScreens';
import {SettingsScreen} from '../screens/settings/SettingsScreen';

export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreens} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
