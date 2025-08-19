import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";

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
   
    
});

export default styles;