// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from '../screens/Splash/SplashScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import ForgotPasswordScreen from '../screens/Forgot/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import VerificationCodeScreen from '../screens/VerificationCode/VerificationCodeScreen';
import TabNavigator from '../TabBar/TabNavigator';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import OrderScreen from '../screens/Order/OrderScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
import NotifySettingsScreen from '../screens/Notify/NotifySettingsScreen';
import HelpScreen from '../screens/Help/HelpScreen';
import HomeScreen from '../screens/Home/HomeScreen';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash"  screenOptions={{ gestureEnabled: false}}>
                    <Stack.Screen name="Splash" component={Splashscreen} options={{ headerShown: false }} />
                     <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
                     <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Reset" component={ResetPasswordScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                     <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
                     <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
                     <Stack.Screen name="NotifySettings" component={NotifySettingsScreen} options={{ headerShown: false }} />
                     <Stack.Screen name="HelpCenter" component={HelpScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
    );
};
export default StackNavigator;
