import { View, Text, ImageBackground, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import styles from './OnboardingStyle'
import images from '../../utils/constants/Images'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import colors from '../../utils/constants/colors'
const OnboardingScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={images.ONBOARD_BG}>
          <Text style={styles.title} >Define yourself in your unique way.</Text>
        </ImageBackground>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={GlobalStyles.defaultButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={GlobalStyles.defaulBtnTxt}>Get Started</Text>
            <Image source={images.RIGHTARROW_ICON} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default OnboardingScreen;