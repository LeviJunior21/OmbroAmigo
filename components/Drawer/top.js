import { View, StyleSheet, Image, Text } from 'react-native'; 
import Constants from 'expo-constants';

export default function Top() {
  return (
    <View style = {styles.top}>
      <Image style = {styles.logo}/>
      <View style = {styles.dialogo}>
        <Text style = {styles.titulo} numberOfLines={1}>Ombro Amigo</Text>
        <Text style = {styles.subtitulo} numberOfLines={1}>Conselhos e Desabafo anônimo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    width: 280,
    height: 110,
    paddingHorizontal: 10,
    backgroundColor: '#349e94',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 

  logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#303030'
  }, 

  dialogo: {
    width: 180,
    height: 80,
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexDirection: 'column'
  },

  titulo: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },

  subtitulo: {
    color: 'white',
  }
})
