import { Platform, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.DARK_BLACK
  },
  bg: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:Platform.OS === 'ios' ? 0 : 25
  },
  logo:{
    height:133,
    width:134
  }

});
export default styles;