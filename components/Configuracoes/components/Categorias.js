import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Line from './Line';

export default function Chat() {

  const [padrao, setPadrao] = useState(1);

  return (
    <View style={styles.notificacoesContainer}>
      <Text style={styles.textoNotificacoes}>Categorias de interesse:</Text>
      <View style={styles.campos}>
        <Text style={styles.text}>Todas Categorias</Text>
        <TouchableOpacity>
          <Text style={styles.editar}>Editar</Text>
        </TouchableOpacity>
      </View>
      <Line/>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  notificacoesContainer: {
    width: width,
    height: 130,
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
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  editar: {
    color: "#349e94"
  },

  text: {
    color: 'white'
  }
})
