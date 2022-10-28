import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    onSelectSwitch,
}) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);
    };

    return (
        <View style={styles.custom_switch_wrapper}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{
                    ...styles.option,
                    backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#e4e4e4',
                }}>
                <Text
                    style={{
                        ...styles.option_text,
                        color: getSelectionMode == 1 ? 'white' : '#AD40AF',
                    }}>
                    {option1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={{
                    ...styles.option,
                    backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4',
                }}>
                <Text
                    style={{
                        ...styles.option_text,
                        color: getSelectionMode == 2 ? 'white' : '#AD40AF',
                    }}>
                    {option2}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    custom_switch_wrapper: {
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    option: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    option_text: {
        fontSize: 14,
    }
})