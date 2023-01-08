import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Top from './Components/Top';
import Comentou from './Components/Comentou';
import Mensagem from './Components/Mensagem';
import Solicitacao from './Components/Solicitacao';
import Aceitou from './Components/Aceitou';

export default function Notificacoes({navigation}) {
  const publicacao = {usuario: "LeviJúnior", mensagem: "Boa tarde!", segundos: 1672598619160}

  return (
    <View style = {styles.janela}>
      <Top/>
      <ScrollView style = {styles.scroll}>
        <Comentou publicacao = {publicacao}/>
        <Solicitacao mensagem={publicacao}/>
        <Mensagem mensagem={publicacao}/>
        <TouchableOpacity>
          <Aceitou mensagem={publicacao}/> 
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  janela: {
    flex: 1,
    backgroundColor: "gray"
  },

  scroll: {
    flex: 1,
  }
})
