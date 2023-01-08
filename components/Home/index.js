import { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, StyleSheet, FlatList, StatusBar, ScrollView, RefreshControl, Dimensions, TouchableOpacity, Text } from 'react-native';
import { firebaseFirestorePublicacoes } from '../Firebase/firestoreCollections';
import { getPublicacoes } from '../Data/posts';
import Posts from './Components/Posts/index'; 
import Top from './Components/Top/index';
import Pesquisa from './Components/Top/search';
import Filtro from './Components/Top/Filter';
import { useContext } from 'react';
import { Provider } from '../DataBase/Provider';

export default function App({navigation}) {
  const [posts, setPosts] = useState([]);
  const { usuario } = useContext(Provider);

  useEffect(() => {
    firebaseFirestorePublicacoes.onSnapshot(() => {
      setPosts(getPublicacoes());
      onRefresh()
    })
  }, [])

  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false)      
    });
  }, []);
  
  const publicar = () => {
    if (usuario.email == undefined) {
      navigation.navigate("Login")
    }
    else {
      navigation.navigate("Publicar")
    }
  }

  return (
    <SafeAreaView style={ styles.container }>
      <StatusBar backgroundColor = {"#349e94"}/>
      <Top/>
      <Pesquisa/>
      <Filtro/>
      <ScrollView 
        style = {styles.scroll}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
          <FlatList
          data={posts}
          numColumns={1}
          renderItem={({item}) => (
            <Posts 
            usuario={item.usuario}
            mensagem={item.mensagem}
            categoria={item.categoria}
            tempo={item.tempo}
            segundos={item.segundos}
            idPublicacao={item.idPublicacao}
            email={item.email}
            />
         )}
        />
      </ScrollView>
      <TouchableOpacity 
        style = {styles.publicar} 
        onPress = {() => {publicar()}}>
        <Text style = {styles.mais}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const width =  Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  },

  scroll: {
    width: width,
    height: height - 50,
  },

  publicar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    bottom: 10,
    right: 10,
    position: 'absolute',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mais: {
    color: 'white',
    fontWeight: '400',
    fontSize: 20
  }
})
