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
    inputContainer: {
        flexDirection: 'column',
        paddingTop: 24,
    },
    inputHeaderTxt: {
        color: colors.DARK_BLACK,
        fontFamily: Fonts.GENERALSANS_MEDIUM,
        fontSize: 16,
        marginBottom: 4,
    },
    input: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.BLUR_WHITE,
        height: 50,
        alignItems:'center',
        justifyContent:'space-between',
        color:colors.DARK_BLACK
        },
    dateInput:{ 
        flexDirection: 'row',
        width:'60%',
        height: 50,
    },
    inputIcon: {
        height: 24,
        width: 24
    }

});

export default styles;