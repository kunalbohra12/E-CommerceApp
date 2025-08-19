import { View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './NotificationScreenStyle'
import Header from '../../Components/Header/HeaderComponent'
import EmptyComponent from '../../Components/Empty/EmptyComponent'
import images from '../../utils/constants/Images'
import colors from '../../utils/constants/colors'

const NotificationScreen = () => {
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <Header title={'Notification'} />
                <View style={styles.divider} />
                <EmptyComponent icon={images.EMPTY_NOTIFICATIONICON} title={'You haven’t gotten any\nnotifications yet!'} subtitle={'We’ll alert you when something\n cool happens.'} />
            </View>
        </SafeAreaView>
    )
}

export default NotificationScreen