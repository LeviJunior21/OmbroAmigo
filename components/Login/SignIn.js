import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, View, Text } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Provider } from '../DataBase/Provider';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Top from './Components/Top';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const usuario = "LeviJúnior";

  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [message, setMessage] = useState();
  const { setUsuario } = useContext(Provider)
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '455833307087-3jpq4uraa63cu40smodhjnkl7dp6icm9.apps.googleusercontent.com',
    androidClientId: '455833307087-3jpq4uraa63cu40smodhjnkl7dp6icm9.apps.googleusercontent.com',
    webClientId: '455833307087-3jpq4uraa63cu40smodhjnkl7dp6icm9.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  useEffect(()=>{
    async function getUserData() {
      let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}`}
      });
      userInfoResponse.json().then(data => {setUserInfo(data); setUsuario(data)});
    }
    getUserData()
  },[userInfo])

  useEffect(() => {
    if (userInfo.email !== undefined) {
      if (userInfo.usuario == undefined) {
        navigation.navigate("Perfil")
      } 
      else {
        navigation.navigate("Home");
      }
    }
  },[userInfo])

  return (
    <SafeAreaView style = {styles.container}>
      <Top/>
      <View style={styles.logo}></View>
      <Text style={styles.bemvindo}>Seja Bem Vindo ao</Text>
      <Text style={styles.bemvindo}>Ombro Amigo</Text>
      <TouchableOpacity style={[styles.loginFacebook, {backgroundColor: '#3b5988'}]}>
        <View style={styles.iconGoogle}>
          <IconEntypo name={"facebook"} color={"white"} size={30}/>
        </View>
        <Text style={styles.textIcon}>Entrar com Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.loginGoogle, {backgroundColor: 'red', marginTop: 6}]} onPress={() => {promptAsync()}}>
        <View style={styles.iconGoogle}>
          <MaterialIcon name={"google"} color={"white"} size={30}/>
        </View>
        <Text style={styles.textIcon}>Entrar com Google</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{"Não iremos compartilhar nenhuma informação."}</Text>
      <Text style={styles.text}>{"Seus desabafos serão anônimos."}</Text>
      <View style={styles.marginInfo}/>
      <Text style={styles.textLogado} numberOfLines={1}>Nome usuário: {userInfo.name? userInfo.name: "Não logado."}</Text>
      <Text style={styles.textLogado} numberOfLines={1}>Email usuário: {userInfo.email? userInfo.email: "Não logado."}</Text>
    </SafeAreaView>
  );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303030'
  },

  loginFacebook: {
    width: 260,
    height: 44,
    borderRadius: 6,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  loginGoogle: {
    width: 260,
    height: 44,
    borderRadius: 6,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 10,
    backgroundColor: '#349e94',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    marginTop: 2,
    color: 'white',
    textAlign: 'center'
  },

  iconGoogle: {
    position: 'absolute',
    left: 6
  },

  bemvindo: {
    color: 'white',
    fontSize: 20
  },

  textIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },

  marginInfo: {
    marginTop: 30,
  },

  textLogado: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
  }
})
