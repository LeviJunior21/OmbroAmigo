import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Switch } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import IconIon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { Provider } from '../DataBase/Provider';

export default function SobreMim() {
  const [noturno, setNotuno] = useState(true);
  const navigation = useNavigation();
  const { usuario } = useContext(Provider);

  const verificaLogin = () => {
    if (usuario.email == undefined) {
      navigation.navigate("Login")
    }
  }

  return (
    <View style = {styles.sobreMim}>
      <TouchableOpacity style = {styles.meuPerfil} onPress={()=> navigation.navigate("Perfil")}>
        <Icon name = {"user"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Meu Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.meuPerfil} onPress={()=> navigation.navigate("Configuracoes")}>
        <IconIon name = {"settings-outline"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Meu Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.meuPerfil} onPress={()=>{verificaLogin()}}>
        <Entypo name = {"emoji-happy"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Estou Sentindo...</Text>
      </TouchableOpacity><TouchableOpacity style = {styles.meuPerfil}>
        <Icon name = {"moon"} color = {'white'} size = {20}/>
        <Text style = {styles.textoMeuPerfil} numberOfLines={1}>Modo Noturno</Text>
        <View style = {styles.useSwitch}>
          <Switch value={noturno} onValueChange = {() => setNotuno(!noturno)}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  sobreMim: {
    width: 280,
    height: 240,
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
  },

  useSwitch: {
    position: 'absolute',
    right: 0
  }
})
