import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, Image } from 'react-native'
import React from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/constants/colors';
import styles from './VerificationCodeScreenStyle';
import images from '../../utils/constants/Images';
const VerificationCodeScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={GlobalStyles.container}>
             <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={images.LEFTARROW_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                    <Text style={styles.title} >Enter 4 Digit Code</Text>
                    <Text style={styles.subTitle} >Enter 4 digit code that your receive on your email (cody.fisher45@example.com).</Text>
                </View>
                <TouchableOpacity style={GlobalStyles.defaultButton} >
                    <Text style={GlobalStyles.defaulBtnTxt} >Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default VerificationCodeScreen