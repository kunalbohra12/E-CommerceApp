import { View, SafeAreaView, Text, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './OrderScreenStyle'
import Header from '../../Components/Header/HeaderComponent'
import EmptyComponent from '../../Components/Empty/EmptyComponent'
import images from '../../utils/constants/Images'
import colors from '../../utils/constants/colors'

const OrderScreen = () => {
    const [isOngoing, setIsOngoing] = useState(true);

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <Header title={'My Orders'} />
                <View style={styles.segmentContainer}>
                    <TouchableOpacity style={isOngoing ? styles.selectedSegmentBtn : styles.unSelectedSegmentBtn} onPress={() => setIsOngoing(!isOngoing)}  >
                        <Text style={styles.selectedTitle}>Ongoing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isOngoing ? styles.unSelectedSegmentBtn : styles.selectedSegmentBtn} onPress={() => setIsOngoing(!isOngoing)} >
                        <Text style={styles.unSelectedTitle}>Completed</Text>
                    </TouchableOpacity>
                </View>
                <EmptyComponent icon={images.EMPTY_BOXICON} title={'No Ongoing Orders!'} subtitle={'You don’t have any ongoing orders\n at this time.'} />
            </View>
        </SafeAreaView>
    )
}

export default OrderScreen