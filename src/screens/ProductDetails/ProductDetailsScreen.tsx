import { View, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'
import Header from '../../Components/Header/HeaderComponent'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import colors from '../../utils/constants/colors'
import styles from './ProductDetailsStyle'
import images from '../../utils/constants/Images'
const ProductDetailsScreen = () => {
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <View style={styles.subContainer} >
                    <Header title={'Details'} />
                </View>
                <View style={styles.subContainer}>
                    <ImageBackground source={images.PRODUCT_BG} style={styles.bgImage}>
                        <TouchableOpacity style={styles.rightBtnContainer} >
                            <Image source={images.UNSAVED_ICON} style={styles.iconSize} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <Text style={styles.title}>Regular Fit Slogan</Text>
                    <View style={styles.horizontalContainer}>
                        <Image source={images.RATING_ICON} style={styles.horizontalIcon} />
                        <Text style={styles.underlinedTxt}>4.0/5</Text>
                        <Text style={styles.mediumTxt}>(45 reviews)</Text>
                    </View>
                    <Text style={styles.subTitle}>The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.</Text>
                    <Text style={styles.highlightTxt}>Choose size</Text>
                    <View style={styles.horizontalContainer}>
                        <TouchableOpacity style={styles.roundedBtn}>
                            <Text style={styles.mediumTxt}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundedBtn}>
                            <Text style={styles.mediumTxt}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundedBtn}>
                            <Text style={styles.mediumTxt}>L</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.bottomTxt}>Price</Text>
                        <Text style={styles.bottomSubTxt}>$ 1,190</Text>
                    </View>
                    <TouchableOpacity style={styles.rightSubContainer}>
                        <Image source={images.BOX_ICON} style={styles.btnIcon} />
                        <Text style={styles.btnTxt}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetailsScreen