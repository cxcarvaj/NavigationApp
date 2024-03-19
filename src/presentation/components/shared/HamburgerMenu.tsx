import {Pressable, Text} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {IonIcon} from './IonIcon.tsx';
import {globalColors} from '../../theme/theme.ts';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu-outline" color={globalColors.primary} />
        </Pressable>
      ),
    });
  }, [navigation]);
  return <></>;
};
