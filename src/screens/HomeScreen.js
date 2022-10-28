import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { freeGames, paidGames } from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { useSelector } from 'react-redux';
import { SIZES } from '../Utils/theme';

export default function HomeScreen({ navigation }) {
    const { userData } = useSelector(state => state.User);
    const [gamesTab, setGamesTab] = useState(1);

    const onSelectSwitch = value => {
        setGamesTab(value);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.user_name_wrapper}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require("../Assets/menu.png")}
                        style={{ width: 26, height: 26 }}
                    />
                </TouchableOpacity>
                <Text style={styles.user_name_text}>
                    Hello {userData?.name}
                </Text>
                <ImageBackground
                    source={{ uri: userData?.img }}
                    style={{ width: 35, height: 35 }}
                    imageStyle={{ borderRadius: 25 }}
                />
            </View>
            <ScrollView>
                <View>
                    <Image
                        source={require("../Assets/Altos-Odyssey.jpeg")}
                        resizeMode="stretch"
                        style={{ width: SIZES.width, height: 250 }}
                    />
                    <View style={{ padding: 14, position: "absolute", bottom: 4 }}>
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor="#999"
                            style={styles.search_wrapper}
                        />
                    </View>
                </View>

                <View style={{ padding: 20 }}>
                    <View style={styles.upcomming_games}>
                        <Text style={styles.upcomming_games_text}>
                            Upcoming Games
                        </Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ color: '#0aada8' }}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <CustomSwitch
                            selectionMode={1}
                            option1="Free to play"
                            option2="Paid games"
                            onSelectSwitch={onSelectSwitch}
                        />
                    </View>

                    {gamesTab == 1 &&
                        freeGames.map(item => (
                            <ListItem
                                key={item.id}
                                photo={item.poster}
                                title={item.title}
                                subTitle={item.subtitle}
                                isFree={item.isFree}
                                onPress={() => { }}
                            />
                        ))}
                    {gamesTab == 2 &&
                        paidGames.map(item => (
                            <ListItem
                                key={item.id}
                                photo={item.poster}
                                title={item.title}
                                subTitle={item.subtitle}
                                isFree={item.isFree}
                                price={item.price}
                                onPress={() => { }}
                            />
                        ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    user_name_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 62,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        elevation: 9,
        shadowColor: "#999"
    },
    user_name_text: {
        fontSize: 18,
        color: "#000"
    },
    search_wrapper: {
        flexDirection: 'row',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        backgroundColor: "#f7f8f9",
        width: SIZES.width - 34
    },
    upcomming_games: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    upcomming_games_text: {
        fontSize: 18,
        color: "#000"
    }
})