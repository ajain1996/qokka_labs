import { StyleSheet } from "react-native";
import { COLORS } from "./theme";

export const authStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 12,
        flexGrow: 1,
        justifyContent: 'center',
    },
    header_block: {
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 24
    },
    login_logo: {
        width: 160,
        height: 60,
        marginTop: 20,
        marginBottom: 30,
    },
    getting_started_text: {
        fontSize: 20,
        color: "#000",
        fontWeight: "900",
    },
    create_an_account_text: {
        fontSize: 14,
        color: "grey",
    },
    already_have_account_text: {
        fontSize: 16,
        color: "#000",
    },
    sign_in_text: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: '700',
    }
});