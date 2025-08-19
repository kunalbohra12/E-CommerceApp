import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
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
  icon: {
    height: 24,
    width: 24,
  },
});
export default styles;