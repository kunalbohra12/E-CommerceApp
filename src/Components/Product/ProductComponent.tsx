import { View, FlatList, ImageBackground, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '../../utils/constants/Images'
import styles from './ProductComponentStyle'

const ProductComponent = () => {
   const data = [
      { id: '1', title: 'Regular Fit Slogan',price:'$ 1,190'},
      { id: '2', title: 'Regular Fit Polo',price:'$ 1,190' },
      { id: '3', title: 'Regular Fit Black',price:'$ 1,190' },
      { id: '4', title: 'Regular Fit V-Neck',price:'$ 1,190' },
      { id: '5', title: 'Item 5',price:'$ 1,190' },
      { id: '6', title: 'Item 6',price:'$ 1,190' },
    ];
  const renderItem = ({item}:any) => {
    return (
      <View style={styles.itemContainer}>
        <ImageBackground source={images.PRODUCT_BG} style={styles.bgImage}>
          <TouchableOpacity style={styles.rightBtnContainer}>
            <Image source={images.LIKE_ICON} style={styles.iconSize}/>
          </TouchableOpacity>
          </ImageBackground> 
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.price}</Text>
      </View>
    )
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={styles.contentContainer}
    />
  )
}

export default ProductComponent