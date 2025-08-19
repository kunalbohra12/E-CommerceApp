import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
        paddingTop: Platform.OS === 'ios' ? 0 : 25,
        paddingHorizontal: 24
    },
    divider: {
        height: 2,
        width: '100%',
        backgroundColor: colors.BLUR_WHITE
    },
    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:24
    },
    itemTitle:{
        fontFamily:Fonts.GENERALSANS_MEDIUM,
        color:colors.DARK_BLACK,
        fontSize:16,
    },
    listContainer:{
        flex:1,
        
    }
});

export default styles;