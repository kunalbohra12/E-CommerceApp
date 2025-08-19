import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 0 : 25
    },
    logo: {
        height: 133,
        width: 134
    },
    divider: {
        height: 2,
        width: '100%',
        backgroundColor: colors.BLUR_WHITE
    },
    inputWrapper:{
        flexDirection:'row',
        height:52,
        borderWidth:1,
        borderColor:colors.BLUR_WHITE,
        borderRadius:12,
        gap:13,
        paddingHorizontal:20,
        alignItems:'center'
    },
    input:{
        width:'80%',
        color:colors.DARK_BLACK,
        fontFamily:Fonts.GENERALSANS_REGULAR,
        fontSize:16

    },
    inputIcon:{
        height:24,
        width:24,
    },
    iconSize:{
        height:24,
        width:24
    }

});
export default styles;