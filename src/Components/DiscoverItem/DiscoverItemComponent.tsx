import { Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './DiscoverItemComponentStyles';
import colors from '../../utils/constants/colors';

const DiscoverItemComponent = () => {
    const [selectedId, setSelectedId] = useState('1');
    const data = [
        { id: '1', itemTitle: 'All' },
        { id: '2', itemTitle: 'T-Shirts' },
        { id: '3', itemTitle: 'Jeans' },
        { id: '4', itemTitle: 'Blazer' },
        { id: '5', itemTitle: 'Shoes' },
        { id: '6', itemTitle: 'Shoes' },
        { id: '7', itemTitle: 'Shoes' },
        { id: '8', itemTitle: 'Shoes' },

    ]
    // const itemBg = ? colors.DARK_BLACK : colors.DEFAULT_WHITE;
    return (
        <ScrollView style={styles.scrollListContainer} horizontal showsHorizontalScrollIndicator={false}>
            {data.map((items) => {
                const isSelected = selectedId === items.id;
                return (
                    <TouchableOpacity
                        key={items.id}
                        onPress={() => setSelectedId(items.id)}
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
                            {items.itemTitle}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>

    )
}

export default DiscoverItemComponent