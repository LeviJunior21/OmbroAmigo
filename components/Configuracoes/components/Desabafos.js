import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import Line from './Line';

export default function Notificacoes() {

  const [padrao, setPadrao] = useState(true);

  return (
    <View style={styles.notificacoesContainer}>
      <Text style={styles.textoNotificacoes}>Lista de desabafos</Text>
      <View style={styles.campos}>
        <RadioButton status={padrao? "checked": "unchecked"} onPress={()=> setPadrao(!padrao)}/>
        <Text style={styles.text}>Padrão</Text>
      </View>
      <View style={styles.campos}>
        <RadioButton status={padrao? "unchecked": "checked"} onPress={()=> setPadrao(!padrao)}/>
        <Text style={styles.text}>Compacta</Text>
      </View>
      <Line/>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  notificacoesContainer: {
    width: width,
    height: 140,
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
  }
})
