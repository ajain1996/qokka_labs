import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../Utils/theme';

const CustomInput = ({ labelValue, showPassword, setShowPassword, secureTextEntry, placeholderText, iconType, passwordIcon, value, headingText, onPress, ...rest }) => {
    return (
        <View style={{ width: '100%', marginTop: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 13, color: COLORS.darkgray, fontWeight: '600' }}>{headingText}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    defaultValue={labelValue}
                    style={styles.input}
                    numberOfLines={1}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholderText}
                    placeholderTextColor="silver"
                    {...rest}
                />
                <TouchableOpacity style={styles.iconStyle} activeOpacity={1} onPress={onPress}>
                    <Entypo name={iconType} size={20} color="silver" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        height: 46,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f8',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    input: {
        padding: 10,
        paddingLeft: 18,
        flex: 1,
        fontSize: 14,
        fontFamily: 'lucida grande',
        color: '#dcdcdc',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.black,
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: SIZES.width / 1.5,
        height: 42,
        fontSize: 16,
        fontFamily: 'lucida grande',
        borderRadius: 8,
        borderWidth: 1,
    },
});