import { StyleSheet } from "react-native";
import Fonts from "../../utils/constants/Fonts";
import colors from "../../utils/constants/colors";

const styles = StyleSheet.create({
    rowContainer: {
        alignItems:'center',
        height: 55,
        marginBottom:24,
        borderWidth:1,
        borderColor:colors.BLUR_WHITE,
        borderRadius:10,
        flexDirection:'row',
        paddingVertical:17,
        paddingHorizontal:24,
        gap:13
    },
    iconSize:{
        height:24,
        width:24
    },
    rowTitle:{
        fontFamily:Fonts.GENERALSANS_MEDIUM,
        color:colors.DARK_BLACK,
        fontSize:16,
    }
});

export default styles;