import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import Avatar from '../../Avatar/index';
import { firebaseFirestorePublicacoes, firebaseFirestoreUsuarios } from '../../Firebase/firestoreCollections';
import { tempoDecorrido } from '../../Home/Components/Posts/time';
import { getDiferencaTempo } from '../../Data/posts';

const tempo = (tempo) => {
    return tempoDecorrido(getDiferencaTempo(tempo));
}

export default function Post(publicacao) {
    const [usuario, setUsuario] = useState("");
    const getNome = useCallback(async (email) => {
    const collectionRef = firebaseFirestoreUsuarios;
    await collectionRef.where("email", '==', email).get().then(resultado => {
      setUsuario(resultado.docs[0].data().usuario);
    });
    }, [])

    useEffect(()=> {
        getNome(publicacao.publicacao.email);
    },[])

    return (
        <TouchableOpacity style = {styles.postagem}>
            <View style = {styles.horizontalTopo}>
            <View style = {styles.avatarLocal}>
                <View style = {styles.avatar}>
                    <Avatar email = {publicacao.publicacao.email}/>
                </View>
                <View>
                    <Text style = {styles.nomeUsuario}>@{(usuario != "")? usuario: "Admin"}{publicacao.publicacao.usuario?"":""}</Text>
                    <Text style = {styles.tempoDecorrido}>{tempo(publicacao.publicacao.tempo.toDate().getTime())}</Text>
                </View>
            </View>
            </View>
            <View style = {styles.caixaMensagem}>
                <Text style = {styles.textoMensagem}>{publicacao.publicacao.mensagem}</Text>
            </View>
        </TouchableOpacity>
    )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1
  }, 

  postagem: {
    paddingVertical: 10, 
    width: width,
    minHeight: 110,
    marginTop: 1,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
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
    width: 50,
    height: 50,
    borderRadius: 25,
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
  }
})
