import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { tempoDecorrido } from '../../Home/Components/Posts/time';
import { getDiferencaTempo } from '../../Data/posts';
import Avatar from '../../Avatar/index';

export default function Comentou(props) {
  const usuario = props.publicacao.usuario;
  const desabafo = props.publicacao.mensagem;
  const tempo = props.publicacao.segundos;

  const time = (tempo) => {
    diferencaTempo = getDiferencaTempo(tempo)
    return tempoDecorrido(diferencaTempo);
  }

  return(
    <TouchableOpacity style = {styles.comentario}>
      <View style = {styles.avatar}>
        <Avatar usuario={usuario}/>
      </View>
      <View style = {styles.textosPublicacao}>
        <Text numberOfLines = {3} style = {styles.fraseNormal}>
          <Text style = {styles.nomeUsuario}>@{usuario}</Text> comentou no desabafo: <Text style = {styles.desabafo}>{desabafo}</Text>
        </Text>
        <Text style = {styles.tempoDecorrido}>{time(tempo)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  comentario: {
    width: width,
    height: 90,
    marginTop: 1, 
    paddingHorizontal: 10,
    backgroundColor: '#303030',
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: 'white'
  },

  textosPublicacao: {
    width: width - 60,
    paddingHorizontal: 10, 
    flexDirection: 'column'
  }, 

  nomeUsuario: {
    marginLeft: 14,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#349e94'
  },

  desabafo: {
    color: '#349e94'
  },

  fraseNormal: {
    color: 'white',
    fontSize: 13
  }, 

  tempoDecorrido: {
    marginTop: 4,
    fontSize: 11,
    color: 'white'
  }
})
