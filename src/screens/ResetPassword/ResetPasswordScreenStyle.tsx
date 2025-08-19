import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
        paddingTop:Platform.OS === 'ios' ? 0 : 25,
        paddingHorizontal:24
    },
    subContainer:{
        flex:1,
        flexDirection:'column'
    },
    iconSize:{
        height:24,
        width:24,
    },
    title: {
        fontSize: 32,
        fontFamily: Fonts.GENERALSANS_SEMIBOLD,
        color: colors.DARK_BLACK,
        marginBottom: 8,
        marginTop: 14,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_REGULAR,
        color: colors.REGULAR_GREY,
        marginBottom: 24,
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
        height: 52,
        borderRadius: 8,
        borderColor: colors.BLUR_WHITE,
        borderWidth: 2,
        marginTop: 8,
        flexDirection:'row',
        alignItems:'center'

    },
    input: {
        fontFamily: Fonts.GENERALSANS_REGULAR,
        fontSize: 16,
        color: colors.DARK_BLACK,
        borderRadius: 8,
        paddingHorizontal:8,
         width:'88%'
    },
   fieldContainer:{
    flexDirection:'column',
    gap:16
   }
});

export default styles;