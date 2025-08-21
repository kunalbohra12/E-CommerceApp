import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    item: {
        flexDirection:'row',
        backgroundColor: colors.BLUR_WHITE,
        paddingHorizontal: 24,
        height: 40,
        borderWidth: 1,
        borderColor: colors.BLUR_WHITE,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        borderRadius: 10,
    },
    itemTitle: {
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        fontSize: 16,
        color: colors.DARK_BLACK,

    },
    scrollListContainer: {
        paddingHorizontal: 18,
    },
});

export default styles;