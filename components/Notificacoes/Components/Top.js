import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Top() {
  const navigation = useNavigation()

  return (
    <View style = {styles.top}>
      <TouchableOpacity onPress = {() => navigation.pop()}>
        <Icon name = {'arrow-back'} color = {'white'} size = {30}/>
      </TouchableOpacity>
      <Text style = {styles.textoSeguindo}>{"Notificações"}</Text>
      <TouchableOpacity style = {styles.notificacao} onPress = {() => navigation.navigate("Notificacoes")}>
        <Entypo name = {'dots-three-vertical'} color = {'white'} size = {24}/>
      </TouchableOpacity>
    </View>
  )
}
 
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  top: {
    width: width,
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#349e94',
    flexDirection: 'row',
    alignItems: 'center'
  },

  textoSeguindo: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '500',
    color: 'white'
  },

  notificacao: {
    position: 'absolute',
    right: 10
  }
})
