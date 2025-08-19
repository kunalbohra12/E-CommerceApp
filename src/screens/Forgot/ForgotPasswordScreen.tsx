import { View, Text, StatusBar, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../utils/constants/Images'
import styles from './ForgotPasswordScreenStyle'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import colors from '../../utils/constants/colors'
import auth from '@react-native-firebase/auth'

const ForgotPasswordScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async () => {
        try {
         const response = await auth().sendPasswordResetEmail(email);
         console.log('Send Code Successfully',response);
          Alert.alert('OTP', '1234');
          navigation.navigate('VerificationCode')
        } catch ({error}:any) {
        const errorMessage = error?.message|| 'Login failed. Please try again.';
          console.error('Password reset error:', error);
          Alert.alert('Error', errorMessage);
        }
    };


    return (
        <SafeAreaView style={GlobalStyles.container}>
             <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={images.LEFTARROW_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                    <Text style={styles.title} >Forgot password</Text>
                    <Text style={styles.subTitle} >Enter your email for the verification process. We will send 4 digits code to your email.</Text>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Email Address</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                style={styles.input}
                                placeholder='Enter your Email'
                                placeholderTextColor={colors.PLACEHOLDER}
                                autoCapitalize='none'
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={GlobalStyles.defaultButton} onPress={handlePasswordReset} >
                    <Text style={GlobalStyles.defaulBtnTxt} >Send Code</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ForgotPasswordScreen