import { Text, View } from "react-native";
import estilos from "../../assets/Styles/Styles";
import { useEffect, useState } from "react";



function Futuro(){

const [mensajeLocal, setMensajeLocal] = useState("");

useEffect (function(){
    traerMensajes();
}, []);

function traerMensajes (){
axios.get("http://192.168.1.58:5000/recibir").
then(function(res){
    if (res.data.status) {
        setMensajeLocal(res.data.mensaje);
    }
})
.catch(function (error){
    console.log(error);
    alert("error al traer los mensajes");
}) 

}

return(
    <View style={estilos.contenedor}>
        <Text style={estilos.titulo}>Tu yo del pasado te dejó este mensaje</Text>
        <View style={estilos.mensajeFuturo}>
 <Text style={estilos.textoMensaje}>Mensaje</Text>
              <Text style={estilos.textoMensaje}>{mensajeLocal}</Text>
        </View>
             

    </View>
)
}

export default Futuro;