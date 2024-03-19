import {Pressable, Text} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, [navigation]);
  return <></>;
};
