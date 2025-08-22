import { View, SafeAreaView, TouchableOpacity, Text, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './HomeScreenStyle'
import images from '../../utils/constants/Images'
import DiscoverItemComponent from '../../Components/DiscoverItem/DiscoverItemComponent'
import ProductComponent from '../../Components/Product/ProductComponent'
import colors from '../../utils/constants/colors'
const HomeScreen = ({ navigation }: any) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Discover</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image source={images.NOTIFICATION_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </View>
                <View style={styles.subHeader}>
                    <View style={styles.searchBar}>
                        <Image source={images.SEARCH_ICON} style={styles.iconSize} />
                        <Text style={styles.placeholderTxt} >Search for clothes...</Text>
                        <Image source={images.MIC_ICON} style={styles.iconSize} />
                    </View>
                    <TouchableOpacity style={styles.roundedBtn}>
                        <Image source={images.FILTER_ICON} style={styles.iconSize} />
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <DiscoverItemComponent selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory}/>
                </View>
                <ProductComponent selectedCategory={selectedCategory} />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen