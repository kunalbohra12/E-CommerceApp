import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
        paddingHorizontal: 0,
        paddingBottom:20,
        paddingTop: Platform.OS === 'ios' ? 0 : 25,
    
    },
    setSpacing:{
        paddingHorizontal:24
    },
    header: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
    },
    headerIcon: {
        height: 24,
        width: 24,
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: Fonts.GENERALSANS_SEMIBOLD,
        color: colors.DARK_BLACK,
    },
    icon:{
        height:24,
        width:24,
    },
    divider:{
        height:2,
        width:'80%',
        backgroundColor:colors.BLUR_WHITE,
        marginBottom:21,
        alignSelf:'center',
        marginVertical:25
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:24,
    },
    subBtn:{
        flexDirection:'row',
        gap:16,
        alignItems:"center",
    },
    iconSize:{
        height:24,
        width:24,
    },
    btnTitle:{
        fontSize:16,
        fontFamily:Fonts.GENERALSANS_REGULAR,
        color:colors.DARK_BLACK,
    },
    horizontalLine:{
        height:8,
        width:'auto',
        backgroundColor:colors.BLUR_GREY,
        marginVertical:24
    },
    highlightTxt:{
        fontSize:16,
        fontFamily:Fonts.GENERALSANS_REGULAR,
        color:colors.RED,
    }
});
export default styles;