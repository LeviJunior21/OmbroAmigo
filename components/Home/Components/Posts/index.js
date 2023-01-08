import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { tempoDecorrido } from './time';
import { categoriasSelecionadas } from './categorySelected';
import Avatar from '../../../Avatar/index';
import { useContext }  from 'react';
import { Provider } from '../../../DataBase/Provider';
import { useNavigation } from '@react-navigation/native';
import { getDiferencaTempo } from '../../../Data/posts';
import { useEffect, useState, useCallback } from 'react';
import { firebaseFirestoreUsuarios } from '../../../Firebase/firestoreCollections';

export default function Posts(publicacao) {
  const { status } = useContext(Provider);
  const navigation = useNavigation();
  
  const tempo = (tempoAnterior) => {
    return tempoDecorrido(getDiferencaTempo(tempoAnterior));
  }

  const [usuario, setUsuario] = useState("");
  const getNome = useCallback(async (email) => {
    const collectionRef = firebaseFirestoreUsuarios;
    await collectionRef.where("email", '==', email).get().then(resultado => {
    setUsuario(resultado.docs[0].data().usuario);
    });
  }, [])

  useEffect(()=> {
    getNome(publicacao.email)
  },[])

  return (
    <TouchableOpacity style = {styles.postagem} onPress = {()=> navigation.navigate("Visualizar", {publicacao: publicacao})}>
      <View style = {styles.horizontalTopo}>
        <View style = {styles.avatarLocal}>
          <View style = {styles.avatar}>
            <Avatar email = {publicacao.email}/>
          </View>
          <View>
            <Text style = {styles.nomeUsuario}>@{usuario}</Text>
            <Text style = {styles.tempoDecorrido}>{tempo(publicacao.segundos)}</Text>
          </View>
        </View>
        <Text style = {[styles.categoria, {color: categoriasSelecionadas(publicacao.categoria).color}]}>
          {categoriasSelecionadas(publicacao.categoria).categoria}
        </Text>
      </View>
      <View style = {styles.caixaMensagem}>
        <Text style = {styles.textoMensagem} numberOfLines = {3}>{publicacao.mensagem}</Text>
      </View>
      <View style = {styles.barraCurtidas}>
        <View style = {styles.caixaCurtida}>
          <Text style = {styles.numeroLike}>{publicacao.comentarios? publicacao.comentarios.length:0}</Text>
          <View style={styles.chatBox}>
            <Icon name = {'chatbox-outline'} size = {16} color = {'white'}/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ) 
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  postagem: {
    paddingVertical: 10, 
    width: width,
    minHeight: 110,
    maxHeight: 170,
    marginTop: 1,
    paddingHorizontal: 10,
    backgroundColor: '#303030'
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

  barraCurtidas: {
    width: width,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center', 
  },

  caixaCurtida: {
    width: 34,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  numeroLike: {
    color: 'white',
    fontSize: 18
  },

  tempoDecorrido: {
    color: 'white', 
    marginLeft: 14,
    fontSize: 13
  }, 

  categoria: {
    color: 'white', 
    fontSize: 13,
    marginRight: 20,
    marginBottom: 13
  },

  chatBox: {
    marginTop: 2
  }
})
