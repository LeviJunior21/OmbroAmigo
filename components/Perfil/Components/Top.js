import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';

export default function Top() {
  const navigation = useNavigation();

  return (
    <View style = {styles.top}>
      <TouchableOpacity onPress = {() => navigation.navigate("Home")}>
        <Icon name = {'arrow-back'} color = {'white'} size = {30}/>
      </TouchableOpacity>
      <Text style = {styles.textoSeguindo}>{"Meu Perfil"}</Text>
    </View>
  )
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  top: {
    width: width,
    height: 60,
    top: 0,
    paddingHorizontal: 10,
    backgroundColor: '#349e94',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center'
  },

  textoSeguindo: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '500',
    color: 'white'
  }
})
