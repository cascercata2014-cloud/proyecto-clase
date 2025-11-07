import axios from "axios";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import Boton from "../../assets/componentes/boton";
import estilos from "../../assets/Styles/Styles";

export default function Index() {

const [mensajelocal, setMensaje] = useState("");

function enviarMensaje() {
  const Mensaje = {
    mensaje:mensajelocal
  }
  axios.post("https://backend-b1kw.onrender.com/subir", Mensaje)
  .then(function(res){
    alert("El mensaje se envió");
    setTimeout(function(){
      router.push("./futuro");
  }, 1000);
    
  })
  .catch(function(error){
console.log(error);
alert("no se envio el mensaje")
  })
}


  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Bienvenido a la máquina del tiempo</Text>
  <Text style={estilos.texto}>
    A través de esta aplicación vamos a poder enviar un mensaje hacia el
    futuro. Escribe tus ideas y envíalas a tu "yo" en el futuro
  </Text>
  <TextInput
    style={estilos.input}
    placeholder="Escribe tu mensaje..."
    placeholderTextColor="#f47b7b"
    value={mensajelocal}
    onChangeText={setMensaje}
    multiline
  />
     <Boton texto="Enviar" funcion={enviarMensaje} />
     
    </View>
  );
}
