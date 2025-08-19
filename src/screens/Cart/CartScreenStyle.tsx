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
        height: 1,
        width: '100%',
        backgroundColor: colors.BLUR_WHITE
    },
    segmentContainer: {
        alignItems: 'center',
        height: 54,
        flexDirection: 'row',
        backgroundColor: colors.BLUR_GREY,
        borderRadius: 12,
        padding:8
    },
    unSelectedSegmentBtn: {
        alignItems: 'center',
        height: 40,
        width: 162,
        backgroundColor: 'transparent',
        borderRadius: 12,
        justifyContent:'center'
    },
    selectedSegmentBtn: {
        alignItems: 'center',
        height: 40,
        width: 162,
        backgroundColor: colors.DEFAULT_WHITE,
        borderRadius: 12,
        justifyContent:'center',

    },
    selectedTitle: {
        fontSize: 14,
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DARK_BLACK,
    },
    unSelectedTitle: {
        fontSize: 14,
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DARK_BLACK,
    }
    
});

export default styles;