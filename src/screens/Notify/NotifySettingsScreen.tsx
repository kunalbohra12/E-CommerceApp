import { View, SafeAreaView, FlatList, Text, Switch, StatusBar } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../utils/styles/GlobalStyles'
import Header from '../../Components/Header/HeaderComponent'
import styles from './NotifySettingsScreenStyle'
import colors from '../../utils/constants/colors'
const NotifySettingsScreen = () => {
    const data = [
        { id: '1', title: "General Notifications" },
        { id: '2', title: "Sound Notifications" },
        { id: '3', title: "Vibrate Notifications" },
        { id: '4', title: "Special Offers" },
        { id: '5', title: "Promo & Discounts" },
        { id: '6', title: "Payment" },
        { id: '7', title: "CashBack" },
        { id: '8', title: "App Updates" },
        { id: '9', title: "New Service Avaliable" },
        { id: '10', title: "New Tips Avaliable" },
    ]
    const [toggleStates, setToggleStates] = useState({});

    const toggleSwitch = (id) => {
        setToggleStates(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    const renderItem = ({ item }: any) => {
        return (
            <>
                <View style={styles.itemContainer} >
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Switch
                        trackColor={{ true: colors.DARK_BLACK, false: colors.BLUR_WHITE }}
                        value={!!toggleStates[item.id]}
                        onValueChange={() => toggleSwitch(item.id)}
                    />
                </View>
                <View style={styles.divider} />
            </>
        );
    }
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.DEFAULT_WHITE} />
            <View style={styles.container}>
                <Header title={'Notification'} />
                <View style={styles.divider} />
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />

                </View>

            </View>
        </SafeAreaView>
    )
}

export default NotifySettingsScreen;