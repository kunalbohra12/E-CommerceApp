import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'transparent'
    },
    centeredContainer: {
        flex: 1,
        flexDirection: 'row',
        // borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(25,25,25,0.2)',

    },
    modalContainer: {
        height: 356,
        width: 341,
        backgroundColor: colors.DEFAULT_WHITE,
        alignItems: 'center',
        borderRadius: 30,
        paddingTop: 24
    },
    modalTxt: {
        fontFamily: Fonts.GENERALSANS_BOLD,
        fontSize: 20,
        color: colors.DARK_BLACK,
        marginTop:19,
        marginBottom:8,
    },
    modalSubTxt: {
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        fontSize: 16,
        color: colors.REGULAR_GREY
    },
    modalIcon: {
        height: 78,
        width: 78,
    },
    columnContainer: {
        flexDirection: "column",
        marginTop:24
    },
    highlightBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 54,
        borderRadius: 8,
        backgroundColor: colors.RED,
        width:293,
        marginBottom:20
    },
    highlightTitle: {
        fontFamily: Fonts.GENERALSANS_BOLD,
        fontSize: 16,
        color: colors.DEFAULT_WHITE
    },
    borderBtn: {
        height:54,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.BLUR_WHITE,
       width:293
    },
    btnTitle: {
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        fontSize: 16,
        color: colors.DARK_BLACK
    }
});

export default styles;