import { StyleSheet } from "react-native";
import Fonts from "../../utils/constants/Fonts";
import colors from "../../utils/constants/colors";

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        height: 224,
        marginRight: 0,
        padding: 5,
        paddingTop: 24,
        marginBottom:24,
    },
    bgImage: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        height: 174,
        borderRadius: 10,
        resizeMode: 'center',
        paddingTop: 12,
        overflow: 'hidden'
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_SEMIBOLD,
        color: colors.DARK_BLACK,
        marginTop: 8,
        marginBottom: 3
    },
    subTitle: {
        fontSize: 12,
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        color: colors.REGULAR_GREY,
    },
    rightBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 34,
        width: 34,
        borderRadius: 8,
        backgroundColor: colors.DEFAULT_WHITE,
        marginRight: 19,
        padding: 8
    },
    iconSize: {
        height: 18,
        width: 18
    },
    contentContainer:{
        paddingHorizontal:18,
    }
});

export default styles;