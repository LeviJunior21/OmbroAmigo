import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Switch } from 'react-native-paper';
import { useState } from 'react';
import Line from './Line';

export default function Notificacoes() {

  const [notificaComentario, setNotificaComentario] = useState(true);
  const [notificaMensagemChat, setNotificaMensagemChat] = useState(true);
  const [notificaVibrar, setNotificaVibrar] = useState(true);
  const [notificaExibir, setNotificaExibir] = useState(true);

  return (
    <View style={styles.notificacoesContainer}>
      <Text style={styles.textoNotificacoes}>Notificações</Text>
      <View style={styles.campos}>
        <Text style={styles.text}>Comentários em desabafos</Text>
        <Switch value={notificaComentario} onValueChange = {() => setNotificaComentario(!notificaComentario)}/>
      </View>
      <View style={styles.campos}>
        <Text style={styles.text}>Mensagens no chat</Text>
        <Switch value={notificaMensagemChat} onValueChange = {() => setNotificaMensagemChat(!notificaMensagemChat)}/>
      </View>
      <View style={styles.campos}>
        <Text style={styles.text}>Tocar som e vibrar ao receber notificações</Text>
        <Switch value={notificaVibrar} onValueChange = {() => setNotificaVibrar(!notificaVibrar)}/>
      </View>
      <View style={styles.campos}>
        <Text style={styles.text}>Exibir notificações de "Novas publicações"</Text>
        <Switch value={notificaExibir} onValueChange = {() => setNotificaExibir(!notificaExibir)}/>
      </View>
      <Line/>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  notificacoesContainer: {
    width: width,
    height: 210,
    paddingHorizontal: 16,
    paddingVertical: 10
  },

  textoNotificacoes: {
    color: "gray",
    fontSize: 16
  },

  campos: {
    width: width - 32,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }, 

  text: {
    color: 'white'
  }
})
