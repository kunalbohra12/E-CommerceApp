import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import styles from './OrderComponentStyle'
import images from '../../utils/constants/Images'
const OrderComponent = () => {
    const data=[
    {id:'1',orderTitle:'Regular Fit Slogan'},
    {id:'2',orderTitle:'Regular Fit Slogan'},
    ]
    const renderItem = () => {
        return(
            <View style={styles.itemContainer}>
                  <Image source={images.PRODUCT_BG} style={styles.sizeContainer}/>  
                  <View style={styles.itemSubContainer}>
                    <Text>hjh</Text>
                  </View>
            </View>
        )
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

export default OrderComponent