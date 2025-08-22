import {FlatList, ImageBackground, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import images from '../../utils/constants/Images'
import styles from './ProductComponentStyle'
import firestore from '@react-native-firebase/firestore'
 import { useNavigation } from '@react-navigation/native'
const ProductComponent = ({selectedCategory}:any) => {
  const [products,setProducts] = useState([]);
  const navigation = useNavigation();
  const fetchedProducts = async () => {
  try {
    const snapshot = await firestore().collection('products').get();
    const allProducts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (selectedCategory && selectedCategory !== 'All') {
      const filtered = allProducts.filter(
        product => product.categoryType === selectedCategory
      );
      setProducts(filtered);
    } else {
      setProducts(allProducts);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
  useEffect(() => {
    fetchedProducts();
  }, [selectedCategory]);

  const handleProduct = ({productId}:any) => {
    navigation.navigate('ProductDetails',{productId})
  }

  const renderItem = ({ item }: any) => {
    return ( 
      <TouchableOpacity style={styles.itemContainer} onPress={() => handleProduct({productId:item.id})}>
        <ImageBackground  source={{ uri: item.image }}  style={styles.bgImage}>
          <TouchableOpacity style={styles.rightBtnContainer} >
            <Image source={images.UNSAVED_ICON} style={styles.iconSize} />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.title}>{item.productName}</Text>
        <Text style={styles.subTitle}>${item.price}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    />
  )
}

export default ProductComponent