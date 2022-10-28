import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import { useSelector } from 'react-redux';

const CustomDrawer = props => {
    const { userData } = useSelector(state => state.User);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6' }}
            >
                <ImageBackground
                    source={require('../Assets/menu-bg.jpeg')}
                    style={{ padding: 20 }}
                >
                    <Image
                        source={{ uri: userData?.img }}
                        style={styles.user_profile_image}
                    />
                    <Text style={styles.user_name}>{userData?.name}</Text>
                </ImageBackground>

                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />

                    <View style={{ paddingHorizontal: 10 }}>
                        <TouchableHighlight onPress={() => { }} style={styles.drawer_btns}
                            underlayColor="#9900E1"
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.drawer_btns_text}>Sign Out</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
            </DrawerContentScrollView>

            <View style={styles.version}>
                <Text style={styles.version_text}>Version 1.0.0</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    user_profile_image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    user_name: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        marginBottom: 5,
    },
    drawer_btns: {
        padding: 12,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 6,
    },
    drawer_btns_text: {
        fontSize: 15,
        marginLeft: 5,
        color: "#000",
        fontWeight: "600"
    },
    version: {
        marginVertical: 20,
        borderTopWidth: 1,
        borderTopColor: "#eee",
        paddingTop: 20
    },
    version_text: {
        fontSize: 15,
        marginLeft: 5,
        color: "#000",
        fontWeight: "600",
        textAlign: "center"
    }
})

export default CustomDrawer;