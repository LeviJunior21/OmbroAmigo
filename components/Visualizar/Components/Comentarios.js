import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity } from 'react-native';
import { tempoDecorrido } from '../../Home/Components/Posts/time';
import Avatar from '../../Avatar/index';
import { useEffect, useState, useCallback } from 'react';
import { firebaseFirestorePublicacoes, firebaseFirestoreUsuarios } from '../../Firebase/firestoreCollections';
import { getDiferencaTempo } from '../../Data/posts';
import Comentario from './ComentarioI';

export default function Comentarios(props) {
  const [comentarios, setComentarios] = useState([]);

  const getComentarios = useCallback(async(idPublicacao) => {
    let comentarios = [];
    await firebaseFirestorePublicacoes.doc(idPublicacao).get().then((dados) => {
      let atributosComentarios = dados.data().comentarios;
      atributosComentarios.map(atributosComentarios =>
        comentarios.push({
          usuario: atributosComentarios.usuario,
          mensagem: atributosComentarios.mensagem,
          tempo: atributosComentarios.tempo,
          email: atributosComentarios.email
        })
      )
    })
    setComentarios(comentarios);
  }, [])

  useEffect(() => {
    firebaseFirestorePublicacoes.onSnapshot(() => {
      getComentarios(props.idPublicacao);
    })
  }, [])

  const tempo = (tempo) => {
    return tempoDecorrido(getDiferencaTempo(tempo))
  }

  return (
    <View style={styles.container}>
      {comentarios.map(publicacao => <Comentario publicacao={publicacao}/>
      )}
    </View>
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
