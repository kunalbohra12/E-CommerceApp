import { View, Text, SafeAreaView, StatusBar, TextInput, Pressable, TouchableOpacity, Image, ActivityIndicator, Alert, Keyboard } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './SignUpScreenStyle'
import colors from '../../utils/constants/colors'
import images from '../../utils/constants/Images'
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useFocusEffect } from '@react-navigation/native'


GoogleSignin.configure({
  webClientId: '118988325049-re15a4cveb93qofblbvs7nf2eimr95q1.apps.googleusercontent.com'})

const SignUpScreen = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwdError, setPasswdError] = useState('');
    const [nameValid, setNameValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [passwdValid, setPasswdValid] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const validateField = (fieldName: any, value: string) => {
        switch (fieldName) {
            case 'name':
                if (!value.trim()) {
                    setNameError('Name is required');
                    setNameValid(false);
                } else {
                    setNameError('');
                    setNameValid(true);
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    setEmailError('Email is required');
                    setEmailValid(false);
                } else if (!emailRegex.test(value)) {
                    setEmailError('Enter a valid email');
                    setEmailValid(false);
                } else {
                    setEmailError('');
                    setEmailValid(true);
                }
                break;
            case 'password':
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[{\]};':"\\|,.<>/?]).{8,}$/;
                if (!value.trim()) {
                    setPasswdError('Password is required');
                    setPasswdValid(false);
                } else if (!passwordRegex.test(value)) {
                    setPasswdError('Password must be contain letter,number, and special character.');
                    setPasswdValid(false);
                }
                else if (value.length < 8) {
                    setPasswdError('Password must be at least 8 characters');
                    setPasswdValid(false);
                } else {
                    setPasswdError('');
                    setPasswdValid(true);
                }
                break;
            default:

                break;
        }
    };

useFocusEffect(
  useCallback(() => {
    console.log('Screen is focused');
    
    return () => {
      setEmailError('');
      setEmail('');
      setPasswdError('');
      setPassword('');
      setName('');
      setNameError('');
      setNameValid(null);
      setEmailValid(null);
      setPasswdValid(null)
    };
  }, [])
);





    const handleRegister = async () => {
        validateField('name', name);
        validateField('email', email);
        validateField('password', password);
        setIsLoading(true)
        try {
            const response = await auth().createUserWithEmailAndPassword(email, password);
            console.log('User Created Succesfully', response.user);
            setIsLoading(false)
            navigation.navigate('TabNavigator');
        } catch ({ error }: any) {
            setIsLoading(false)
            const errorMessage = error?.message || 'User Creation failed. Please try again.';
            console.log('User Register Error', errorMessage);
            Alert.alert('User Creation Created', 'Field is Required');
        }
    };


      useEffect(() => {
      
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar translucent={true} barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <KeyboardAwareScrollView 
            scrollEnabled={isKeyboardVisible}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title} >Create your Account</Text>
                    <Text style={styles.subTitle} >Let's create your Account</Text>
                    <View style={styles.fieldContainer}>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Full Name</Text>
                            <View style={[
                                styles.inputWrapper,
                                nameError && GlobalStyles.errorInput,
                                nameValid && GlobalStyles.successInput
                            ]}>
                                <TextInput
                                    value={name}
                                    onChangeText={(text) => {
                                        setName(text);
                                        validateField('name', text);
                                    }}
                                    onBlur={() => validateField('name', name)}
                                    style={styles.input}
                                    placeholder='Enter your name'
                                    placeholderTextColor={colors.PLACEHOLDER}
                                    autoCapitalize='none'
                                />
                                {nameError ? (
                                    <Image source={images.WARNING_ICON} style={GlobalStyles.errorIcon} />
                                ) : nameValid ? (
                                    <Image source={images.CHECKED_ICON} style={GlobalStyles.errorIcon} />
                                ) : null}
                            </View>
                            {nameError ? <Text style={GlobalStyles.errorTxt}>{nameError}</Text> : null}
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Email Address</Text>
                            <View style={[
                                styles.inputWrapper,
                                emailError && GlobalStyles.errorInput,
                                emailValid && GlobalStyles.successInput
                            ]}>
                                <TextInput
                                    value={email}
                                    onChangeText={(text) => {
                                        setEmail(text);
                                        validateField('email', text);
                                    }}
                                    onBlur={() => validateField('email', email)}
                                    style={styles.input}
                                    placeholder='Enter your email'
                                    placeholderTextColor={colors.PLACEHOLDER}
                                    autoCapitalize='none'
                                />
                                {emailError ? (
                                    <Image source={images.WARNING_ICON} style={GlobalStyles.errorIcon} />
                                ) : emailValid ? (
                                    <Image source={images.CHECKED_ICON} style={GlobalStyles.errorIcon} />
                                ) : null}
                            </View>
                            {emailError ? <Text style={GlobalStyles.errorTxt}>{emailError}</Text> : null}
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Password</Text>
                            <View style={[
                                styles.inputWrapper,
                                passwdError && GlobalStyles.errorInput,
                                passwdValid && GlobalStyles.successInput
                            ]}>
                                 <TextInput
                                    value={password}
                                    onChangeText={(text) => {
                                        setPassword(text);
                                        validateField('password', text);
                                    }}
                                    onBlur={() => validateField('password', password)}
                                    style={styles.input}
                                    placeholder='Enter your Password'
                                    placeholderTextColor={colors.PLACEHOLDER}
                                    autoCapitalize='none'
                                />
                                <Pressable onPress={() => setShowPassword(!showPassword)}>
                                    <Image source={showPassword ? images.SHOW_ICON : images.HIDE_ICON} style={styles.iconSize} />
                                </Pressable>
                                {passwdError ? (
                                    <Image source={images.WARNING_ICON} style={GlobalStyles.errorIcon} />
                                ) : passwdValid ? (
                                    <Image source={images.CHECKED_ICON} style={GlobalStyles.errorIcon} />
                                ) : null}
                            </View>
                            {passwdError ? <Text style={GlobalStyles.errorTxt}>{passwdError}</Text> : null}
                        </View>
                        <Text style={styles.descrpnTxt}>By signing up you agree to our <Text style={styles.underLinedTxt}>Terms, Privacy Policy, and Cookie Use</Text> </Text>
                        <TouchableOpacity style={[styles.buttonContainer, GlobalStyles.activeButton]} onPress={handleRegister} >
                            {isLoading ? (
                                <ActivityIndicator size="small" color="#ffffff" />
                            ) : (
                                <Text style={styles.btnTxt}>Create Account</Text>
                            )}
                        </TouchableOpacity>
                        <Image source={images.OR_BG} style={styles.bgImage} />
                        <TouchableOpacity style={styles.socialLoginBtn} onPress={handleGoogleSignIn} >
                            <Image source={images.GOOGLE_ICON} style={styles.iconSize} />
                            <Text style={styles.mediumTxt}>Sign Up with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSizeContainer}>
                            <Image source={images.FACEBOOK_ICON} style={styles.iconSize} />
                            <Text style={styles.btnTxt}>Sign Up with Facebook</Text>
                        </TouchableOpacity>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.bottomTxt}>Already have an account? </Text>
                            <Pressable onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.loginTxt}>Log In</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default SignUpScreen;