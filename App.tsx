import { Text, View } from "react-native";
import colors from "./src/themes/colors";
import fonts from "./src/themes/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function App() {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent: "center"}}>
      <Text style={{color: colors.primary, fontSize:fonts.size.xlg}}>Hello world</Text>
      <AntDesign name="caretleft" size={25}/>
    </View>
  );
}