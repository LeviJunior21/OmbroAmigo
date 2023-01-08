import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import Line from './Line';

export default function Chat() {

  const [padrao, setPadrao] = useState(1);

  return (
    <View style={styles.notificacoesContainer}>
      <Text style={styles.textoNotificacoes}>Quem pode iniciar um chat:</Text>
      <View style={styles.campos}>
        <RadioButton status={(padrao == 1)? "checked": "unchecked"} onPress={()=> setPadrao(1)}/>
        <Text style={styles.text}>Qualquer usuário</Text>
      </View>
      <View style={styles.campos}>
        <RadioButton status={(padrao == 2)? "checked": "unchecked"} onPress={()=> setPadrao(2)}/>
        <Text style={styles.text}>Apenas com solicitação</Text>
      </View>
      <View style={styles.campos}>
        <RadioButton status={(padrao == 3)? "checked": "unchecked"} onPress={()=> setPadrao(3)}/>
        <Text style={styles.text}>Nenhum usuário</Text>
      </View>
      <Line/>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  notificacoesContainer: {
    width: width,
    height: 180,
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
