import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Constants from 'expo-constants';

export default function Top() {
  const navigation = useNavigation();

  return (
    <View style = {styles.top}>
      <TouchableOpacity onPress = {() => navigation.openDrawer()}>
        <IonIcon name = {'menu'} color = {'white'} size = {30}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.notificacao} onPress = {() => navigation.navigate("Notificacoes")}>
        <IonIcon name = {'notifications-outline'} color = {'white'} size = {24}/>
      </TouchableOpacity>
    </View>
  )
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  top: {
    width: width,
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#349e94',
    flexDirection: 'row',
    alignItems: 'center'
  },

  notificacao: {
    position: 'absolute',
    right: 10
  }
})
