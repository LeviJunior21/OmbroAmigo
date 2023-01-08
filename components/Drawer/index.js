import { View, StyleSheet, Text } from 'react-native';
import Top from './top';
import SobreMim from './SobreMim';
import SobreApp from './SobreApp';
import Outros from './Outros'; 

export default function CustomDrawer() {
  const versao = "1.20.1";

  return (
    <View style = {styles.drawer}>
      <Top/>
      <SobreMim/>
      <SobreApp/>
      <Outros/>
      <Text style = {styles.versao}>Versão {versao}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#303030'
  },

  versao: {
    width: 280,
    bottom: 10,
    fontSize: 11,
    position: 'absolute',
    textAlign: 'center',
    color: 'white'
  } 
})
