import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import Fonts from "../constants/Fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
        paddingBottom: 20
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    spacer: {
        flex: 1,
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 6,
        gap: 5
    },
    verticalContainer: {
        flexDirection: 'column',
    },
    horizontalLine: {
        width: '100%',
        height: 2,
        backgroundColor: colors.BLUR_WHITE,
        marginTop: 4,
    },
    boldTxt: {
        fontWeight: '700',
        fontSize: 10,
        color: colors.DEFAULT_WHITE
    },
    setSpacing: {
        justifyContent: 'space-between',
        width: '90%'
    },
    defaultButton: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 8,
        backgroundColor: colors.DARK_BLACK,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    defaulBtnTxt: {
        fontSize: 16,
        color: colors.DEFAULT_WHITE,
        fontFamily: Fonts.GENERALSANS_MEDIUM
    },
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 50,
    },

    tabIcon: {
        width: 24,
        height: 24,
        marginBottom: 4,
    },
    errorTxt: {
        fontFamily: Fonts.GENERALSANS_REGULAR,
        fontSize: 14,
        color: colors.ERROR_RED
    },
    errorIcon:{
        height:24,
        width:24,
        marginLeft:10
    },
     secureErrorIcon:{
        height:24,
        width:24,
        marginRight:0
    },
    errorInput: {
        borderColor: colors.ERROR_RED,
    },
    successInput:{
        borderColor: colors.GREEN,
        borderWidth: 1,
    },
   disableButton:{
    backgroundColor:colors.BLUR_GREY,
   },
   activeButton:{
        backgroundColor:colors.DARK_BLACK,
   }
});
export default styles;  