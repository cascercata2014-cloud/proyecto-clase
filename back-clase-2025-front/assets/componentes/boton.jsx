import { View, Pressable, Text } from "react-native";
import estilos from "../Styles/Styles";



function Boton({texto,funcion}){

return(
    <View style={estilos.boton}>
         <Pressable onPress={funcion}>
        <Text style={estilos.textoBoton}>{texto}</Text>
              </Pressable>
    </View>
)

}


export default Boton;