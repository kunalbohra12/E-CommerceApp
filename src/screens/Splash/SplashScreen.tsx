import { Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import styles from './SplashScreenStyle'
import images from '../../utils/constants/Images';
const Splashscreen = ({navigation}:any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabNavigator');
    }, 2000);
  }, [navigation]);
  return (
      <ImageBackground source={images.BG_IMAGE} style={styles.bg}>
        <Image source={images.APP_ICON} style={styles.logo}/>
      </ImageBackground>
  )
}
export default Splashscreen;