import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUR_WHITE,
    },
    innerContainer: {
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 0 : 25, 
    },
    title: {
        fontSize: 28,
        fontFamily: Fonts.GENERALSANS_BOLD,
        color: colors.DARK_BLACK,
        marginBottom: 10,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 15,
        fontFamily: Fonts.GENERALSANS_REGULAR,
        color: colors.DARK_GREY,
        marginBottom: 24,
    },
    underLinedTxt: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DARK_BLACK,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: 'blue',
        marginRight:5
    },
    fieldContainer: {
        flexDirection: 'column',
    },
    field: {
        flexDirection: 'column',
        marginBottom: 16,
    },
    fieldTitle: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DARK_BLACK,
    },
    inputWrapper: {
        height: 50,
        borderRadius: 8,
        borderColor: colors.BLUR_WHITE,
        borderWidth: 2,
        marginTop: 8,
        flexDirection:'row',
        alignItems:'center',
    },
    input: {
        fontFamily: Fonts.GENERALSANS_REGULAR,
        fontSize: 16,
        color: colors.DARK_BLACK,
        borderRadius: 8,
        paddingHorizontal:8,
        width:'80%',
        justifyContent:'space-between'
    },
    descrpnTxt: {
        fontSize: 14,
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DARK_BLACK,
    },
    buttonContainer: {
        alignItems: 'center',
        height: 50,
        borderRadius: 8,
        backgroundColor: colors.BLUR_GREY,
        justifyContent: 'space-around',
        marginTop: 24,
    },
    btnTxt: {
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color:colors.DEFAULT_WHITE,
        fontSize: 14,
    },
    bgImage: {
        height: 20,
        width: '100%',
        marginVertical: 24,
    },
    socialLoginBtn: {
        alignItems: 'center',
        height: 50,
        borderRadius: 8,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.BLUR_GREY,
        justifyContent: 'center',
        gap: 10,
        marginBottom: 24,
    },
    iconSize: {
        height: 24,
        width: 24,
    },
    mediumTxt: {
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DARK_BLACK,
        fontSize: 16,
    },
    buttonSizeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 50,
        backgroundColor: colors.BLUE_THEME,
        gap: 10,
        marginBottom: 24
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },
    bottomTxt: {
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DARK_BLACK,
        fontSize: 16,
    },
    loginTxt: {
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DARK_BLACK,
        fontSize: 16,
    },
    iconSuccess: {
        fontSize: 18,
        color: colors.GREEN,
        marginLeft: 6,
    },
    iconError: {
        fontSize: 18,
        color: 'red',
        marginLeft: 6,
    },
    iconWarningCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 6,
    },
    iconWarningText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    iconEye: {
        fontSize: 18,
        color: colors.DARK_GREY,
        marginLeft: 6,
    },
});

export default styles;