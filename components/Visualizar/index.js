import { View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Top from './Components/Top';
import Publicacao from './Components/Publicacao';
import Input from './Components/EntradaInput';
import Comentarios from './Components/Comentarios';

export default function App({route}) {
  const { publicacao } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Top/>
      <ScrollView>
        <Publicacao publicacao = {publicacao}/>
        <Comentarios idPublicacao = {publicacao.idPublicacao}/>
        <View style = {styles.bottom}/>
      </ScrollView>
      {(publicacao.usuario != "Admin")?<Input publicacao = {publicacao}/>:<View/>}
    </SafeAreaView>
  );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },

  bottom: {
    height: 50
  }
});
