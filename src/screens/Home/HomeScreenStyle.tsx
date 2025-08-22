import { StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
import Fonts from "../../utils/constants/Fonts";
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.DEFAULT_WHITE,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20,
    paddingHorizontal:24,
  },
  headerTitle:{
    fontFamily:Fonts.GENERALSANS_SEMIBOLD,
    fontSize:32,
    color:colors.DARK_BLACK
  },
  iconSize:{
    height:24,
    width:24,
  },
  subHeader:{
    flexDirection:'row',
     alignItems:'center',
    justifyContent:'space-between',
    marginTop:16,
     paddingHorizontal:24,
    gap:8,
  },
  searchBar:{
    alignItems:'center',
    flexDirection:'row',
    height:52,
    borderRadius:8,
    paddingHorizontal:20,
    paddingVertical:8,
    width:'85%',
    borderWidth:2,
    borderColor:colors.BLUR_GREY,
    gap:8
  },
 placeholderTxt:{
    color:colors.PLACEHOLDER,
    fontFamily:Fonts.GENERALSANS_REGULAR,
    fontSize:16,
    marginRight:24
 },
 roundedBtn:{
    alignItems:'center',
    justifyContent:'center',
    height:52,
    width:52,
    backgroundColor:colors.DARK_BLACK,
    borderRadius:10,
 },
 scrollListContainer:{
  marginHorizontal:18,
 },
 listContainer:{
  flexDirection:'column',
  marginTop:12,
 }

});
export default styles;