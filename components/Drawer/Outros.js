import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Outros() {
  return (
    <View style = {styles.sobreMim}>
      <TouchableOpacity style = {styles.meuPerfil}>
        <Entypo name = {"share"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Indique o app a um amigo...</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.meuPerfil}>
        <Icon name = {"mail"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Entre em contato</Text>
      </TouchableOpacity><TouchableOpacity style = {styles.meuPerfil}>
        <Entypo name = {"google-play"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Mais apps!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  sobreMim: {
    width: 280,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  }, 

  meuPerfil: {
    width: 260,
    marginLeft: 18,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textoMeuPerfil: {
    fontSize: 13,
    marginLeft: 24,
    color: 'white',
    fontWeight: '500'
  }
})
