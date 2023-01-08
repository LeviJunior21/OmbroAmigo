import { TouchableOpacity, View, Text, Dimensions, StyleSheet } from 'react-native';
import Avatar from '../../Avatar/index';
import { tempoDecorrido } from '../../Home/Components/Posts/time';
import { getDiferencaTempo } from '../../Data/posts';

export default function Mensagem(mensagem) {
  const time = (tempo) => {
    diferencaTempo = getDiferencaTempo(tempo)
    return tempoDecorrido(diferencaTempo);
  }

  return (
    <TouchableOpacity style = {styles.conversa}>
      <View style = {styles.avatar}>
        <Avatar usuario = {mensagem.mensagem.usuario}/>
      </View>
      <View style = {styles.informacoes}>
        <View style = {styles.topoNomeTempo}>
          <Text style={styles.nomeUsuario}>@{mensagem.mensagem.usuario} </Text>
          <Text style={styles.mensagem}>{"enviou uma solicitação de chat"}</Text>
        </View>
          <Text style={styles.textoTempo}>{time(mensagem.mensagem.segundos)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  conversa: {
    width: width,
    height: 70,
    marginTop: 1,
    paddingHorizontal: 10,
    backgroundColor: '#303030', 
    flexDirection: 'row',
    alignItems: 'center',
  },

  nomeUsuario: {
    marginLeft: 0,
    fontSize: 14,
    fontWeight: '500',
    color: '#349e94'
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22, 
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

  mensagem: {
    color: 'white',
    fontSize: 13
  },

  topoNomeTempo: {
    width: width - 70,
    flexDirection: 'row'
  },

  textoTempo: {
    color: 'white',
    fontSize: 11
  }
})
