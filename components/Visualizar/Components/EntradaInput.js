import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions, Keyboard } from 'react-native';
import { useState } from 'react';
import { sendComentario } from '../../Data/posts';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { Provider } from '../../DataBase/Provider';

export default function (publicacao) {
  const idPublicacao = publicacao.publicacao.idPublicacao;
  const [textos, setText] = useState("");
  
  const { usuario } = useContext(Provider);

  function send(idPublicacao, email, texto) {
    sendComentario(idPublicacao, email, texto)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style = {styles.input} placeholder={"Deixe uma mensagem..."} placeholderTextColor={"white"} cursorColor={"white"} selectionColor={"green"} value={textos}
      onChangeText={(el) => setText(el)}
      />
      <TouchableOpacity onPress={()=> {send(idPublicacao, usuario.email, textos); Keyboard.dismiss(); setText("")}}>
        <IonIcon name={"send"} color={"green"} size={30}/>
      </TouchableOpacity>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  inputContainer: {
    width: width,
    height: 50,
    borderTopWidth: 1,
    bottom: 0,
    zIndex: 2,
    backgroundColor: "gray",
    position: "absolute",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'white'
  },

  input: {
    width: width - 40,
    height: 36,
    color: 'white'
  }
})
