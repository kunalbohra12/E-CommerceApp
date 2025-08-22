import React, { useState } from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import styles from './DetailsScreenstyle'
import Header from '../../Components/Header/HeaderComponent'
import { Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../utils/constants/colors'
import images from '../../utils/constants/Images'
const DetailsScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <Header title={'My Details'} />
                <View style={styles.divider} />
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeaderTxt}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeaderTxt}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeaderTxt}>Date of Birth</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.dateInput}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity >
                            <Image source={images.CALENDAR_ICON} style={styles.inputIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                 <View style={styles.inputContainer}>
                    <Text style={styles.inputHeaderTxt}>Gender</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.dateInput}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity >
                            <Image source={images.NAVIGATION_ICON} style={styles.inputIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen