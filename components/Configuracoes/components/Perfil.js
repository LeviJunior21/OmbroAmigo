import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import Line from './Line';

export default function Notificacoes() {

  const [completo, setCompleto] = useState(true);

  return (
    <View style={styles.notificacoesContainer}>
      <Text style={styles.textoNotificacoes}>Tipo de perfil:</Text>
      <View style={styles.campos}>
        <RadioButton status={completo? "checked": "unchecked"} onPress={()=> setCompleto(!completo)}/>
        <Text style={styles.text}>Completo</Text>
      </View>
      <View style={styles.campos}>
        <RadioButton status={completo? "unchecked": "checked"} onPress={()=> setCompleto(!completo)}/>
        <Text style={styles.text}>Reduzido</Text>
      </View>
      <Text style={styles.sobrePerfil}>Oculta informações sobre a data de criação da conta e o número de comentários/desabafos</Text>
      <Line/>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  notificacoesContainer: {
    width: width,
    height: 200,
    paddingHorizontal: 16,
    paddingVertical: 10
  },

  textoNotificacoes: {
    color: "gray",
    fontSize: 16,
    marginTop: 20
  },

  campos: {
    width: width - 32,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }, 

  text: {
    color: 'white'
  },

  sobrePerfil: {
    marginTop: 10,
    width: 0.9*width-36,
    marginLeft: 36,
    color: 'white'
  }
})
