import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SIZES } from '../Utils/theme';

export default function ListItem({ photo, title, subTitle, isFree, price, onPress }) {
    return (
        <View style={styles.list_item_wrapper}>
            <View style={styles.list_item}>
                <Image
                    source={photo}
                    style={styles.list_item_image}
                />
                <View style={{ width: SIZES.width - 220 }}>
                    <Text
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                        }}>
                        {subTitle}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                        {title}
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={onPress} style={styles.list_item_btn}>
                <Text style={styles.list_item_btn_text}>
                    {isFree == 'Yes' && 'Play'}
                    {isFree == 'No' && price}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    list_item_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    list_item: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    list_item_image: {
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 8,
    },
    list_item_btn: {
        backgroundColor: '#0aada8',
        padding: 10,
        width: 100,
        borderRadius: 10,
    },
    list_item_btn_text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    }
})