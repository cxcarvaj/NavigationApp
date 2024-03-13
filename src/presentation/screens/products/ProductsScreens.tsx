import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

const products = [
  {
    id: 1,
    name: 'Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
  },
  {
    id: 4,
    name: 'Product 4',
  },
  {
    id: 5,
    name: 'Product 5',
  },
  {
    id: 6,
    name: 'Product 6',
  },
  {
    id: 7,
    name: 'Product 7',
  },
  {
    id: 8,
    name: 'Product 8',
  },
  {
    id: 9,
    name: 'Product 9',
  },
  {
    id: 10,
    name: 'Product 10',
  },
];

export const ProductsScreens = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Products</Text>
      {/* FlatList renders list items as lazy loading */}
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product', item)}
            label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Settings</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
