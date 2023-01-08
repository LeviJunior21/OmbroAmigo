import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <TouchableOpacity style = {styles.logar} onPress={()=> navigation.navigate("Login")}>
        <Text style={styles.text}>Fazer login</Text>
      </TouchableOpacity>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  login: {
    width: width,
    height: 100,
    backgroundColor: "#303030",
    alignItems: 'center'
  },

  logar: {
    width: 100,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#349e94',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: 'white',
    fontSize: 16
  }
})
