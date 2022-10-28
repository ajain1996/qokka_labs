import Toast from 'react-native-simple-toast';
import database from '@react-native-firebase/database';
import Auth from './Auth';

const databaseLogin = async (email, pass, callback) => {
    database()
        .ref('/users/')
        .orderByChild('emailId')
        .equalTo(email)
        .once('value')
        .then(async snapshot => {
            console.log("\n\n Email & Password: ", email, pass, snapshot)
            if (snapshot === null) {
                Toast.show("Email Id doesn't exist");
                return false;
            }
            if (snapshot.val() == null) {
                Toast.show("Invalid Email Id or Email doesn't exist");
                return false;
            }
            let userData = Object.values(snapshot.val())[0];
            if (userData?.password !== pass) {
                Toast.show('Invalid Password');
                return false;
            }
            await Auth.setAccount(userData);
            Toast.show('Login Successfully!');
            callback(userData);
        })
        .catch((error) => {
            callback(null)
            console.log("\n\n Error: ", error);
        });
}

const databaseRegister = async (data, callback) => {
    return database()
        .ref('/users/' + data.id)
        .set(data)
        .then((dataVal) => {
            Toast.show('Register Successfully!');
            callback()
        })
        .catch((error) => {
            Toast.show("Something went wrong!")
        })
}

const getAllUsers = (userData, setAllUser, setAllUserBackup) => {
    database()
        .ref("/users/")
        .once('value')
        .then(snapshot => {
            setAllUser(Object.values(snapshot.val()).filter((it) => it.id !== userData))
            setAllUserBackup(Object.values(snapshot.val()).filter((it) => it.id !== userData))
        });
}

export default {
    databaseLogin,
    databaseRegister,
    getAllUsers,
}