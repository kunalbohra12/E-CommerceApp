import { StyleSheet } from "react-native";
import Fonts from "../../utils/constants/Fonts";
import colors from "../../utils/constants/colors";
// import colors from "../../utils/constants/colors";
// import Fonts from "../../utils/constants/Fonts";

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:15
    },
    iconSize: {
        height: 64,
        width: 64
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.GENERALSANS_SEMIBOLD,
        color: colors.DARK_BLACK,
        textAlign:"center",
        marginTop:18
    },
    subTitle: {
        fontSize: 16,
        fontFamily: Fonts.GENERALSANS_REGULAR,
        color: colors.REGULAR_GREY,
         textAlign:"center"

    }
});

export default styles;