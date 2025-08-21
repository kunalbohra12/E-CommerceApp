import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DEFAULT_WHITE,
        // paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 0 : 25

    },
    divider: {
        height: 2,
        width: '100%',
        backgroundColor: colors.BLUR_WHITE
    },
    bgImage: {
        height: 341,
        width: 348,
        flexDirection: "row",
        justifyContent: 'flex-end',
        borderRadius: 10,
        resizeMode: 'center',
        paddingTop: 12,
        overflow: 'hidden',
        marginBottom: 12
    },
    subContainer: {
        paddingHorizontal: 24,

    },
    iconSize: {
        height: 26,
        width: 26,
    },
    rightBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 48,
        borderRadius: 8,
        backgroundColor: colors.DEFAULT_WHITE,
        marginRight: 19,
        padding: 8
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_SEMIBOLD,
        color: colors.DARK_BLACK,
        marginTop: 8,
        marginBottom: 13
    },
    subTitle: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_REGULAR,
        color: colors.REGULAR_GREY,
        marginBottom: 13
    },
    icon: {
        height: 33,
        width: 33,
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 13,
    },
    horizontalIcon: {
        height: 17,
        width: 18,
    },
    underlinedTxt: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_REGULAR,
        color: colors.DARK_BLACK,
        textDecorationColor: colors.DARK_BLACK,
        textDecorationLine: 'underline'
    },
    mediumTxt: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_REGULAR,
        color: colors.REGULAR_GREY,

    },
    highlightTxt: {
        fontSize: 20,
        fontFamily: Fonts.GENERALSANS_SEMIBOLD,
        color: colors.DARK_BLACK,
        marginBottom: 5,
    },
    roundedBtn: {
        height: 47,
        width: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.BLUR_WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
    },
    rightSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
        width: 240,
        borderRadius: 10,
        backgroundColor: colors.DARK_BLACK,
        gap:10
    },
    btnTxt: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.DEFAULT_WHITE,
    },
    btnIcon: {
        height: 17,
        width: 20
    },
    bottomTxt: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_REGULAR,
        color: colors.REGULAR_GREY,
    },
    bottomSubTxt: {
        fontSize: 24,
        fontFamily: Fonts.GENERALSANS_SEMIBOLD,
        color: colors.DARK_BLACK,
    }
});
export default styles;