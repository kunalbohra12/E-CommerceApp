// components/Header.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import images from '../../utils/constants/Images';
import styles from './HeaderComponentStyle';
const Header = ({ title, showBack = true, showNotification = true }:any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.LEFTARROW_ICON} style={styles.headerIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.headerIcon} />
      )}
      <Text style={styles.headerTitle}>{title}</Text>

      {showNotification ? (
        <Image source={images.NOTIFICATION_ICON} style={styles.icon} />
      ) : (
        <View style={styles.icon} />
      )}
    </View>
  );
};



export default Header;
