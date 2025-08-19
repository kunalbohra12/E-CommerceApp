import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.DARK_BLACK
  },
  background: {
    flex:1,
 },
  logo:{
    height:133,
    width:134
  },
  title:{
    fontSize:64,
    color:colors.DARK_BLACK,
    paddingLeft:24,
    paddingTop:20,
    fontFamily:Fonts.GENERALSANS_SEMIBOLD,
    lineHeight:Platform.OS === 'ios' ? 60:65
  },
  icon:{
    height:24,
    width:24,
  },
  bottomContainer:{
    padding:24,
    backgroundColor:colors.DEFAULT_WHITE,
  }
});
export default styles;