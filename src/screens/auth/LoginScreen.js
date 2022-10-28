import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import { useDispatch } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput'
import { setUser } from '../../redux/reducer/user';
import Database from '../../Service/Database';
import { COLORS } from '../../Utils/theme';
import Toast from 'react-native-simple-toast';
import { authStyles } from '../../Utils/styles';
import CustomLoader, { CustomPanel } from '../../components/CustomLoader';

export default function LoginScreen({ navigation }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showEye, setShowEye] = useState("");

    const handleSubmitOnPress = () => {
        if (email == "" || password == "") {
            Toast.show('please fill in all the fields');
        } else if (password.length === 0) {
            Toast.show('Password id mandatory');
        } else if (password.length < 6) {
            Toast.show('Password must be 6 characters long');
        } else {
            setLoading(true);
            Database.databaseLogin(email, password, (response) => {
                if (response !== null) {
                    setEmail("");
                    setPassword("");
                    setLoading(false);
                    dispatch(setUser(response));
                    navigation.navigate("AppStack")
                }
            });
        }
    }

    return (
        <ScrollView contentContainerStyle={authStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View>
                <View style={authStyles.header_block}>
                    <Text style={{ fontSize: 20, color: "#000", fontWeight: "900" }}>Let's Sign You In</Text>

                    <View style={{ marginTop: 4 }} />

                    <Text style={{ fontSize: 14, color: "grey" }}>Welcome back, you've been missed</Text>
                </View>
                <Text />

                <CustomInput
                    placeholderText="Email"
                    iconType="user"
                    headingText="Email"
                    keyboardType={'email-address'}
                    autoCapitalize='none'
                    labelValue={email}
                    onChangeText={(val) => {
                        setEmail(val);
                    }}
                />

                <CustomInput
                    placeholderText="Password"
                    iconType={showEye ? "eye" : "eyeo"}
                    headingText="Password"
                    secureTextEntry={showEye ? false : true}
                    labelValue={password}
                    onChangeText={(val) => {
                        setPassword(val);
                    }}
                    onPress={() => { setShowEye(!showEye) }}
                />
                <View style={{ marginTop: 20 }} />

                <CustomButton
                    fontSize={16}
                    text={"Sign In"}
                    fontWeight={"600"}
                    textColor={COLORS.white}
                    bgColor={COLORS.primary}
                    width={"100%"}
                    height={50}
                    onPress={handleSubmitOnPress}
                />
                <View style={{ marginTop: 20 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={authStyles.already_have_account_text}>Don't have an account? </Text>
                    <TouchableOpacity
                        style={{ alignItems: 'center' }}
                        activeOpacity={0.6}
                        onPress={() => { navigation.navigate("RegisterScreen") }}
                    >
                        <Text style={authStyles.sign_in_text}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CustomPanel loading={loading} />
            <CustomLoader loading={loading} />
        </ScrollView>
    )
}
