import { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { conversas } from './RepositorioMensagem';
import { tempoDecorrido } from '../Home/Components/Posts/time';
import { firebaseFirestoreUsuarios } from '../Firebase/firestoreCollections';
import Top from './Top.js';
import Avatar from '../Avatar/index';

export default function Chat({navigation}) {

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

  useEffect(()=> onRefresh, []);

  return (
    <View style = {styles.janela}>
      <Top navigation = {navigation}/>
      <ScrollView 
      style = {styles.scroll}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
         />}
      >
      {conversas().map(conversa => 
        <TouchableOpacity style = {styles.conversa}>
          <View style = {styles.avatar}>
            <Avatar email={conversa.email}/>
          </View>
          <View style = {styles.informacoes}>
            <View style = {styles.topoNomeTempo}>
              <Nome email = {conversa.email}/>
              <Text style={styles.textoTempo}>{tempoDecorrido(conversa.segundos)}</Text>
            </View>
            <Text style = {styles.textoMensagem} numberOfLines={1}>{conversa.mensagem}</Text>
          </View>
        </TouchableOpacity>
      )}
      </ScrollView>
    </View>
  )
}

const Nome = (email) => {
  const [usuarioApp, setUsuario] = useState("");

  const getStatus = useCallback(async (email) => {
    const collectionRef = firebaseFirestoreUsuarios;
    await collectionRef.where("email", '==', email).get().then(resultado => {
      setUsuario(resultado.docs[0].data().usuario);
    });
  }, [])

  useEffect(()=>{
    getStatus(email.email)
  }, [])

  return (
    <Text style={styles.nomeUsuario}>@{usuarioApp}</Text>
  )
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  janela: {
    flex: 1,
    backgroundColor: "gray",
  },

  scroll: {
    width: width,
    height: height - 60,
  },

  conversa: {
    width: width,
    height: 70,
    marginTop: 1,
    backgroundColor: '#303030', 
    flexDirection: 'row',
    alignItems: 'center',
  },

  nomeUsuario: {
    marginLeft: 14,
    fontSize: 14,
    fontWeight: '500',
    color: '#349e94'
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  informacoes: {
    width: width - 50,
    marginLeft: 10, 
    justifyContent: 'space-between',
    flexDirection: 'column'
  },

  topoNomeTempo: {
    width: width - 70,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  textoMensagem: {
    color: 'white',
    width: width - 80,
    marginLeft: 13
  }, 

  textoTempo: {
    color: 'white',
  }
})
