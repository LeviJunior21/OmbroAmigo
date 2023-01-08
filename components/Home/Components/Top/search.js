import { Animated, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useContext, useState } from 'react';
import { Provider } from '../../../DataBase/Provider';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Pesquisa() {

  const { translateX, abrirPesquisa, setAbrirPesquisa, setBusca } = useContext(Provider)
  const [ buscar, setBuscar ] = useState("");

  const iniciarPesquisa = (busca) => {
    setBusca(busca);
  }

  const pesquisa = () => {
    Animated.spring(translateX, {
      toValue: abrirPesquisa? 0: width,
      useNativeDriver: true,
    }).start()
    setAbrirPesquisa(!abrirPesquisa)
  }

  return (
    <Animated.View style = {[styles.pesquisa, {transform: [{translateX}]}]}>
      <TextInput 
      style = {styles.entradaPesquisa} 
      onChangeText = {(valor) => setBuscar(valor)}
      placeholder = {'Pesquisar'}
      placeholderTextColor = {'white'} 
      cursorColor = {'white'}
      />
      <TouchableOpacity onPress={() => {iniciarPesquisa(buscar); pesquisa()}}>
        <Icon name={'search'} color = {'white'} size = {30}/>
      </TouchableOpacity>
    </Animated.View>
  )
}

const width = Dimensions.get('window').width;
const styles =StyleSheet.create({
  pesquisa: {
    width: width,
    height: 60,
    zIndex: 4,
    paddingHorizontal: 10,
    backgroundColor: '#303030',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }, 

  entradaPesquisa: {
    width: width - 60, 
    height: 50,
    color: 'white'
  }

})
