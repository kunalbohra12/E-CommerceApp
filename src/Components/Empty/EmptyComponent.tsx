// components/EmptyState.js
import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './EmptyComponentStyle';

const EmptyComponent = ({ icon, title, subtitle }:any) => {
  return (
    <View style={styles.centerContainer}>
      <Image source={icon} style={styles.iconSize} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
};
export default EmptyComponent;
