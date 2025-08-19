import { View, SafeAreaView } from 'react-native'
import React from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './HelpScreenStyle'
import Header from '../../Components/Header/HeaderComponent'
import HelpServicesComponent from '../../Components/HelpService/HelpServicesComponent'
const HelpScreen = () => {
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View style={styles.container}>
                <Header title={'Help Center'} />
                <View style={styles.divider} />
                <HelpServicesComponent/>
            </View>
        </SafeAreaView>
    )                       
}
export default HelpScreen;