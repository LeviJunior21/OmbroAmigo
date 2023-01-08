import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Animated } from 'react-native';
import { Provider } from '../../../DataBase/Provider';
import { useContext } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Top() {

  const { abrir, setAbrir, translateY, translateX, categoria, abrirPesquisa, setAbrirPesquisa } = useContext(Provider);
  const navigation = useNavigation();

  const mostrarCategorias = () => {
    Animated.spring(translateY, {
      toValue: abrir? 0: -height,
      useNativeDriver: true,
    }).start()
    setAbrir(!abrir)
  }

  const pesquisa = () => {
    Animated.spring(translateX, {
      toValue: abrirPesquisa? 0: width,
      useNativeDriver: true,
    }).start()
    setAbrirPesquisa(!abrirPesquisa)
  }

  return (
    <View style = {styles.topo}>
      <TouchableOpacity style = {styles.menu} onPress={() => navigation.openDrawer()}>
        <Icon name = {'menu'} color = {'white'} size = {30}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.categorias} onPress = {() => {mostrarCategorias()}}>
          <Text style = {styles.textoCaregorias}>{categoria}</Text>
          <View style = {styles.chevron}>
            <Icon name = {'chevron-down'} color = {'white'} size = {24}/>
          </View>
        </TouchableOpacity>
      <View style = {styles.auxiliadores}>
        <TouchableOpacity style = {styles.pesquisa} onPress = {() => pesquisa()}>
          <Icon name = {'search'} color = {'white'} size = {24}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.notificacoes} onPress = {() => navigation.navigate("Notificacoes")}>
          <Icon name = {'notifications-outline'} color = {'white'} size = {24}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.filtro}>
          <Icon name = {'filter'} color = {'white'} size = {24}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  topo: {
    width: width,
    height: 60,
    paddingVertical: 5,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'white',
    backgroundColor: '#349e94',
    zIndex: 4
  },

  menu: {
    width: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  categorias: {
    width: 160,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  textoCaregorias: {
    width: 118,
    color: 'white',
    flexWrap: 'wrap',
    fontSize: 16
  }, 

  chevron: {
    width: 20,
    height: 20,
    right: 0, 
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },

  auxiliadores: {
    width: 140, 
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  pesquisa: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  notificacoes: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  filtro: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
})