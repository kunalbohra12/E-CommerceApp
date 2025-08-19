import { View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './CartScreenStyle'
import Header from '../../Components/Header/HeaderComponent'
import EmptyComponent from '../../Components/Empty/EmptyComponent'
import images from '../../utils/constants/Images'
import colors from '../../utils/constants/colors'

const CartScreen = () => {

    return (
        <SafeAreaView style={GlobalStyles.container}>
             <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <Header title={'My Cart'} />
                <View style={styles.divider} />
                <EmptyComponent icon={images.EMPTY_BOXICON} title={'Your Cart Is Empty!'} subtitle={'When you add products, they’ll\n appear here.'}/>
            </View>
        </SafeAreaView>
    )                       
}

export default CartScreen