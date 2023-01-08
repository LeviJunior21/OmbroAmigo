import { View, StyleSheet, Dimensions, Text, TouchableOpacity, StatusBar } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

export default function Top() {
  const navigation = useNavigation();

  return (
    <View style={styles.top}>
      <StatusBar backgroundColor={"#349394"}/>
      <TouchableOpacity onPress={()=> navigation.pop()}>
        <IonIcon name={"arrow-back"} color={"white"} size={30}/>
      </TouchableOpacity>
      <Text style={styles.textoPrincipal}>Configurações</Text>
    </View>
  )
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  top: {
    width: width,
    height: 60,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#349e94"
  },

  textoPrincipal: {
    fontSize: 20,
    marginLeft: 28,
    fontWeight: "500",
    color: "white"
  }
})
