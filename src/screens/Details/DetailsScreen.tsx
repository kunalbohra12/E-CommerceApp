import React from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './DetailsScreenstyle'
import Header from '../../Components/Header/HeaderComponent'
import EmptyComponent from '../../Components/Empty/EmptyComponent'
import images from '../../utils/constants/Images'
import { SafeAreaView, StatusBar, View } from 'react-native'
import colors from '../../utils/constants/colors'

const DetailsScreen = () => {
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />

            <View style={styles.container}>
                <Header title={'My Details'} />
                <View style={styles.divider} />
                <EmptyComponent icon={images.EMPTY_BOXICON} title={'No Ongoing Orders!'} subtitle={'You don’t have any ongoing orders\n at this time.'} />
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen