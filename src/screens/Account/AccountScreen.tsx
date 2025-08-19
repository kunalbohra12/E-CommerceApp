import { View, SafeAreaView, TouchableOpacity, Image, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './AccountScreenStyle'
import Header from '../../Components/Header/HeaderComponent'
import images from '../../utils/constants/Images'
import LogoutComponent from '../../Components/Logout/LogoutComponent'
import auth from '@react-native-firebase/auth'
import colors from '../../utils/constants/colors'
const AccountScreen = ({ navigation }: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleLogout = async () => {
        try {
            await auth().signOut();
            console.log('User Logout Succesfully');
            setIsModalVisible(false)
            navigation.navigate('SignUp');
        } catch ({ error }: any) {
            console.log(error.message);
        }
    }

    return (
        <SafeAreaView style={GlobalStyles.container}>
         <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <View style={styles.setSpacing}>
                    <Header title={'Account'} />
                </View>
                <View style={styles.divider} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Order')}>
                    <View style={styles.subBtn} >
                        <Image source={images.ORDER_ICON} style={styles.iconSize} />
                        <Text style={styles.btnTitle}>My Orders</Text>
                    </View>
                    <TouchableOpacity >
                        <Image source={images.NAVIGATION_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.horizontalLine} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Details')}>
                    <View style={styles.subBtn} >
                        <Image source={images.DETAILS_ICON} style={styles.iconSize} />
                        <Text style={styles.btnTitle}>My Details</Text>
                    </View>
                    <TouchableOpacity >
                        <Image source={images.NAVIGATION_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.subBtn} >
                        <Image source={images.ADDRESS_ICON} style={styles.iconSize} />
                        <Text style={styles.btnTitle}>Address Book</Text>
                    </View>
                    <TouchableOpacity >
                        <Image source={images.NAVIGATION_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.subBtn} >
                        <Image source={images.PAYMENT_ICON} style={styles.iconSize} />
                        <Text style={styles.btnTitle}>Payment Methods</Text>
                    </View>
                    <TouchableOpacity >
                        <Image source={images.NAVIGATION_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('NotifySettings')}>
                    <View style={styles.subBtn} >
                        <Image source={images.NOTIFICATION_ICON} style={styles.iconSize} />
                        <Text style={styles.btnTitle}>Notifications</Text>
                    </View>
                    <TouchableOpacity >
                        <Image source={images.NAVIGATION_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.horizontalLine} />
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.subBtn} >
                        <Image source={images.QUESTIONS_ICON} style={styles.iconSize} />
                        <Text style={styles.btnTitle}>FAQ's</Text>
                    </View>
                    <TouchableOpacity >
                        <Image source={images.NAVIGATION_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('HelpCenter')} >
                    <View style={styles.subBtn} >
                        <Image source={images.HELP_ICON} style={styles.iconSize} />
                        <Text style={styles.btnTitle}>Help Center</Text>
                    </View>
                    <TouchableOpacity >
                        <Image source={images.NAVIGATION_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.horizontalLine} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setIsModalVisible(true)}>
                    <View style={styles.subBtn} >
                        <Image source={images.LOGOUT_ICON} style={styles.iconSize} />
                        <Text style={styles.highlightTxt}>Logout</Text>
                    </View>
                </TouchableOpacity>
                <LogoutComponent
                    isVisible={isModalVisible}
                    onClose={() => setIsModalVisible(false)}
                    onLogout={handleLogout}
                />
            </View>
        </SafeAreaView>
    )
}
export default AccountScreen 