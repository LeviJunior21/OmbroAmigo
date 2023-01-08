import { StyleSheet, Dimensions, Animated, View, ScrollView, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { useContext } from 'react'; 
import { Provider } from '../../../DataBase/Provider';
import { categorias } from '../../../DataBase/categorias';

export default function Filtro() {
  const { translateY, abrir, setAbrir, setCategoria } = useContext(Provider)

  const animate = () => {
    Animated.spring(translateY, {
      toValue: abrir? 0: -height,
      useNativeDriver: true,
    }).start()
    setAbrir(!abrir)
  }

  return (
    <Animated.View style = {[styles.filtro, {transform: [{translateY}]}]}>
      <View style = {{height: 60}}/>
      <ScrollView style = {styles.scroll}>
        <View style = {styles.categorias}>
          {categorias.map(categoria => 
          <TouchableOpacity style = {styles.categoria} onPress = {() => {animate(); setCategoria(categoria.categoria)}}>
            <ImageBackground style = {styles.imagemFundo} imageStyle={{opacity: 0.4}}>
              <Text style = {styles.textoCategoria}>{categoria.categoria}</Text>
            </ImageBackground>
          </TouchableOpacity>)}
        </View>
      </ScrollView>
    </Animated.View>
  )
}

const width = Dimensions.get("window").width;
const height= Dimensions.get("window").height;
const styles = StyleSheet.create({
  filtro: {
    width: width,
    height: height,
    backgroundColor: '#303030',
    position: 'absolute',
    zIndex: 2
  }, 

  scroll: {
    width: width,
    height: height - 60,
  },

  imagemFundo: {
    width: 0.49 * width,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center'
  },

  categorias: {
    width: width,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

  categoria: {
    width: 0.49 * width,
    height: 130,
    borderWidth: 2,
    marginTop: 1,
    borderColor: 'black'
  },

  textoCategoria: {
    fontSize: 20,
    fontWeight: '500', 
    color: 'white'
  }
})
