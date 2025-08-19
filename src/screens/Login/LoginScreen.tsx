import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import colors from '../../utils/constants/colors';
import images from '../../utils/constants/Images';
import styles from './LoginScreenStyle';
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginRequest } from '../../HelperFiles/API/ApiService';

GoogleSignin.configure({
  webClientId: '18988325049-um7bmvogsf34tuf680b604p80r9cjcng.apps.googleusercontent.com',
    offlineAccess: true,
});


const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwdError, setPasswdError] = useState('');
  const [passwdValid, setPasswdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const validateField = (fieldName: any, value: string) => {
    switch (fieldName) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          setEmailError('email is required');
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

  const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await LoginRequest({
                email: email, password: password,
            });
            if (response.data != null) {
                console.log('email is', email);
                console.log('password is', password);
                if (response.success) {
                    setLoading(false);
                    navigation.navigate('BottomTabBarScreen');
                    console.log('Login Success:', response);
                    // await AsyncStorage.setItem('userToken', response.data?.token);
                } else {
                    console.log('Login Data MisMatched:', response);
                }
            } else {
                console.log('Login Failed', response.message);
                Alert.alert('Login Failed', response.message);
            }
        } catch (error) {
            console.error('Login Failed:', error);
        }
    };

  // const handleLogin = async () => {
  //   validateField('email', email);
  //   validateField('password', password);
  //   setLoading(true);
  //   try {
  //     const response = await auth().signInWithEmailAndPassword(email, password);
  //     setLoading(false);
  //     console.log('User login Successfully', response);

  //     navigation.navigate('TabNavigator');
  //     Toast.show({
  //       type: 'success',
  //       text2: 'User login Successfully',
  //     });
  //   } catch (error: any) {
  //     setLoading(false);
  //     const errorMessage = error?.message || 'Login failed. Please try again.';
  //     console.log('Login Error', errorMessage);
  //     Alert.alert('Login Error', 'Please Enter Valid Credentials.');
  //   }
  // };

 



  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('TabNavigator')
      Alert.alert('Success', 'Signed in with Google!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Google Sign-In failed.');
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar translucent={true} barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
      <View style={styles.innerContainer}>
        <Text style={styles.title} >Login to your account</Text>
        <Text style={styles.subTitle} >It’s great to see you again.</Text>
        <View style={styles.fieldContainer}>

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
                secureTextEntry={!showPassword}
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

          <View style={styles.txtBtnContainer}>
            <Text>Forgot your Password?</Text>
            <Pressable onPress={() => navigation.navigate('Forgot')}>
              <Text style={styles.underLinedTxt} > Reset your Password</Text>
            </Pressable>
          </View>

          <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.btnTxt}>Login</Text>
            )}
          </TouchableOpacity>

          <Image source={images.OR_BG} style={styles.bgImage} />
          <TouchableOpacity style={styles.socialLoginBtn} onPress={handleGoogleSignIn}>
            <Image source={images.GOOGLE_ICON} style={styles.iconSize} />
            <Text style={styles.mediumTxt}>Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSizeContainer}>
            <Image source={images.FACEBOOK_ICON} style={styles.iconSize} />
            <Text style={styles.btnTxt}>Login with Facebook</Text>
          </TouchableOpacity>

          <View style={styles.bottomContainer}>
            <Text style={styles.bottomTxt}>Don't have an account? </Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.loginTxt}>Join</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
