/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, Text, View } from 'react-native';
import images from '../utils/constants/Images';
import GlobalStyles from '../utils/styles/GlobalStyles';
import colors from '../utils/constants/colors';
import Fonts from '../utils/constants/Fonts';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import SavedScreen from '../screens/Saved/SavedScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import CartScreen from '../screens/Cart/CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: colors.DARK_BLACK,
                tabBarInactiveTintColor: colors.PLACEHOLDER,
                tabBarStyle: {
                    backgroundColor: colors.DEFAULT_WHITE,
                    height: Platform.OS === 'ios' ? 100 : 60,
                    borderTopColor: colors.BLUR_WHITE,
                    borderTopWidth: 2,
                    paddingTop: 16
                },
                tabBarLabelStyle: {
                    color: colors.PLACEHOLDER,
                    fontFamily: Fonts.GENERALSANS_MEDIUM,
                    fontSize: 16,
                },
                tabBarShowLabel: false,
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({ focused }) => {
                    let iconSource;
                    if (route.name === 'Home') iconSource = images.HOME_ICON;
                    else if (route.name === 'Search') iconSource = images.SEARCH_ICON;
                    else if (route.name === 'Saved') iconSource = images.LIKE_ICON;
                    else if (route.name === 'Cart') iconSource = images.CART_ICON;
                    else if (route.name === 'Account') iconSource = images.ACCOUNT_ICON;
                    return (
                        <View style={GlobalStyles.tabContainer}>
                            <Image
                                source={iconSource}
                                style={[
                                    GlobalStyles.tabIcon,
                                    { tintColor: focused ? colors.DARK_BLACK : colors.PLACEHOLDER },
                                ]}
                                resizeMode="contain"
                            />
                            <Text style={[{ color: focused ? colors.DARK_BLACK : colors.PLACEHOLDER, fontFamily: Fonts.GENERALSANS_MEDIUM, fontSize: 12 }]} >{route.name}</Text>
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Saved" component={SavedScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
