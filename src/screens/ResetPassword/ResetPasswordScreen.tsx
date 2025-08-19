import { View, Text, StatusBar, TouchableOpacity, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './ResetPasswordScreenStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../utils/constants/Images'
import colors from '../../utils/constants/colors'

const ResetPasswordScreen = ({ navigation }: any) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar translucent={true} barStyle="light-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>

                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack}>
                        <Image source={images.LEFTARROW_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                    <Text style={styles.title} >Reset password</Text>
                    <Text style={styles.subTitle} >Enter your email for the verification process. We will send 4 digits code to your email.</Text>
                   <View style={styles.fieldContainer}>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Password</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                style={styles.input}
                                placeholder='Enter your Password'
                                placeholderTextColor={colors.PLACEHOLDER}
                                secureTextEntry={!showPassword}
                            />
                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                <Image source={showPassword ? images.SHOW_ICON : images.HIDE_ICON} style={styles.iconSize} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>New Password</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                value={newPassword}
                                onChangeText={setNewPassword}
                                style={styles.input}
                                placeholder='Enter your Password'
                                placeholderTextColor={colors.PLACEHOLDER}
                                secureTextEntry={!showNewPassword}
                            />
                            <Pressable onPress={() => setShowNewPassword(!showNewPassword)}>
                                <Image source={showNewPassword ? images.SHOW_ICON : images.HIDE_ICON} style={styles.iconSize} />
                            </Pressable>
                        </View>
                    </View>
                   </View>
                </View>
                <TouchableOpacity style={GlobalStyles.defaultButton} >
                    <Text style={GlobalStyles.defaulBtnTxt} >Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ResetPasswordScreen