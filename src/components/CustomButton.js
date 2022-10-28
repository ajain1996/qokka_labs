import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/AntDesign';

export default function CustomButton({
    text, bgColor, textColor,
    fontSize, fontWeight, width, height,
    icon, onPress, iconColor,
}) {
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={[styles.submit_btn, {
                    backgroundColor: bgColor,
                    width: width, height: height,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }]}
                activeOpacity={0.8} onPress={onPress}
            >
                {icon ? <Entypo name={icon} color={iconColor} size={18} /> : <></>}
                {icon ? <View style={{ width: 8 }} /> : <></>}
                <Text style={{ fontSize: fontSize, color: textColor, fontWeight: fontWeight }}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    submit_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
});

