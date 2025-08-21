import { FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./DiscoverItemComponentStyles";
import colors from "../../utils/constants/colors";
import { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore'


const DiscoverItemComponent = ({ selectedCategory, onCategorySelect }:any) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const snapshot = await firestore().collection('categories').get();
      const fetched = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(fetched);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const renderItem = ({ item }:any) => {
const isSelected = selectedCategory === item.name;
    return (
      <TouchableOpacity
        onPress={() => onCategorySelect(item.name)}
        style={[
          styles.item,
          { backgroundColor: isSelected ? colors.DARK_BLACK : colors.DEFAULT_WHITE },
        ]}
      >
        <Text
          style={[
            styles.itemTitle,
            { color: isSelected ? colors.DEFAULT_WHITE : colors.DARK_BLACK },
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollListContainer}
    />
  );
};

export default DiscoverItemComponent;
