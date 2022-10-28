import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput'
import Toast from 'react-native-simple-toast';
import Database from '../../Service/Database';
import { COLORS } from '../../Utils/theme';
import { authStyles } from '../../Utils/styles';
import uuid from 'react-native-uuid';
import CustomLoader, { CustomPanel } from '../../components/CustomLoader';

export default function RegisterScreen({ navigation }) {
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showEye, setShowEye] = useState("");

    const handleSubmitOnPress = () => {
        if (name == '' || email == "" || password == "") {
            Toast.show('please fill in all the fields');
        } else if (!(email.includes("@")) || !(email.includes("gmail.com"))) {
            Toast.show('Invalid Email');
        } else if (password.length === 0) {
            Toast.show('Password id mandatory');
        } else if (password.length < 6) {
            Toast.show('Password must be 6 characters long');
        } else {
            setLoading(true);
            let data = {
                id: uuid.v4(),
                name: name,
                emailId: email,
                password: password,
                img: "https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            };
            Database.databaseRegister(data, () => {
                setName("")
                setEmail("")
                setPassword("")
                setLoading(false);
                navigation.navigate("LoginScreen")
            })
        }
    }

    return (
        <ScrollView contentContainerStyle={authStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View>
                <View style={authStyles.header_block}>
                    <Text style={authStyles.getting_started_text}>Getting Started</Text>
                    <View style={{ marginTop: 4 }} />
                    <Text style={authStyles.create_an_account_text}>Create an account to continue!</Text>
                </View>
                <Text />

                <CustomInput
                    placeholderText="Full Name"
                    iconType="user"
                    headingText="Full Name"
                    keyboardType={'default'}
                    labelValue={name}
                    onChangeText={(val) => {
                        setName(val);
                    }}
                />

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
                    width={"100%"} height={50}
                    onPress={handleSubmitOnPress}
                />
                <View style={{ marginTop: 20 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={authStyles.already_have_account_text}>Already have an account? </Text>
                    <TouchableOpacity
                        style={{ alignItems: 'center' }}
                        activeOpacity={0.6}
                        onPress={() => { navigation.navigate("LoginScreen") }}
                    >
                        <Text style={authStyles.sign_in_text}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CustomPanel loading={loading} />
            <CustomLoader loading={loading} />
        </ScrollView>
    )
}
