import { View, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import EmptyComponent from '../../Components/Empty/EmptyComponent';
import images from '../../utils/constants/Images';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import Header from '../../Components/Header/HeaderComponent';
import styles from './SearchScreenStyle';
import colors from '../../utils/constants/colors';

const SearchScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
            <View style={styles.container}>
                <Header title={'Search'} />
                <View style={styles.inputWrapper}>
                   <Image source={images.SEARCH_ICON} style={styles.inputIcon}/>
                   <TextInput 
                   placeholder='Search for Clothes'
                   placeholderTextColor={colors.PLACEHOLDER}
                   style={styles.input}
                   /> 
                   <TouchableOpacity>
                    <Image source={images.MIC_ICON} style={styles.iconSize} />
                   </TouchableOpacity>
                </View>
                <EmptyComponent icon={images.NOTFOUND_ICON} title={'No Results Found!'} subtitle={'Try a similar word or something\n more general.'}/>
            </View>
    </SafeAreaView>
  )
}

export default SearchScreen;