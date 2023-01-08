import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { tempoDecorrido } from '../../Home/Components/Posts/time';
import { getDiferencaTempo } from '../../Data/posts';
import { firebaseFirestoreUsuarios } from '../../Firebase/firestoreCollections';
import { useEffect, useState, useCallback } from 'react';
import Avatar from '../../Avatar/index';

export default function Posts(publicacao) {
  const tempo = (tempoAnterior) => {
    return tempoDecorrido(getDiferencaTempo(tempoAnterior))
  }
  const [usuario, setUsuario] = useState("");
  const getNome = useCallback(async (email) => {
    const collectionRef = firebaseFirestoreUsuarios;
    await collectionRef.where("email", '==', email).get().then(resultado => {
      setUsuario(resultado.docs[0].data().usuario);
    });
  }, [])

  useEffect(()=> {
    getNome(publicacao.publicacao.email)
  },[])

  return (
    <View style = {styles.postagem}>
      <View style = {styles.horizontalTopo}>
        <View style = {styles.avatarLocal}>
          <View style = {styles.avatar}>
            <Avatar email = {publicacao.publicacao.email}/>
          </View>
          <View> 
            <Text style = {styles.nomeUsuario}>@{(usuario != "")? usuario: "Admin"} {publicacao.publicacao.usuario?"":""}</Text>
            <Text style = {styles.tempoDecorrido}>{tempo(publicacao.publicacao.segundos)}</Text>
          </View>
        </View>
      </View>
      <View style = {styles.caixaMensagem}>
        <Text style = {styles.textoMensagem}>{publicacao.publicacao.mensagem}</Text>
      </View>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  postagem: {
    paddingVertical: 10, 
    width: width,
    minHeight: 110,
    marginTop: 1,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    backgroundColor: '#4842c2',
    borderBottomColor: 'white'
  }, 
  
  horizontalTopo: {
    width: width,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    overflow: 'hidden'
  },

  avatarLocal: {
    width: 0.5 * width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 

  nomeUsuario: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '500',
    color: '#349e94'
  },

  caixaMensagem: {
    paddingVertical: 8,
    width: width,
    minHeight: 30
  },

  textoMensagem: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  }, 

  tempoDecorrido: {
    color: 'white', 
    marginLeft: 14,
    fontSize: 13
  }, 
})
