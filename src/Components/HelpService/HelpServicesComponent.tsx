import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import styles from './HelpServicesComponentStyle'
import images from '../../utils/constants/Images'

const HelpServicesComponent = () => {
    const data = [
        { id: '1', serviceName:"Customer Service",serviceIcon: images.HELP_ICON},
        { id: '2', serviceName:"Whatsapp",serviceIcon: images.WHATSAPP_ICON},
        { id: '3', serviceName:"Website",serviceIcon: images.WEB_ICON},
        { id: '4', serviceName:"Facebook",serviceIcon: images.FB_ICON},
        { id: '5', serviceName:"Twitter",serviceIcon: images.TWITTER_ICON},
        { id: '6', serviceName:"Instagram",serviceIcon: images.INSTA_ICON},
    ]
    const renderItem = ({item}:any) => {
        return (
            <View style={styles.rowContainer}>
                <Image source={item.serviceIcon} style={styles.iconSize} />
                <Text style={styles.rowTitle}>{item.serviceName}</Text>
            </View>
        );
    }
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default HelpServicesComponent