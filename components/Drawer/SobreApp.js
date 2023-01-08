import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function SobreApp() {
  return (
    <View style = {styles.sobreMim}>
      <TouchableOpacity style = {styles.meuPerfil}>
        <Icon name = {"star"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Gostou do app?</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.meuPerfil}>
        <Entypo name = {"block"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Remover anúncios</Text>
      </TouchableOpacity><TouchableOpacity style = {styles.meuPerfil}>
        <Icon name = {"book"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Termos de usos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  sobreMim: {
    width: 280,
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
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
