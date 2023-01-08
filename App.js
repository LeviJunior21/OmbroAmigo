import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { Provider } from './components/DataBase/Provider';
import Home from './components/Home/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from './components/Drawer/index';
import Seguindo from './components/Seguindo/index';
import Publicar from './components/Publicar/index';
import Configuracoes from './components/Configuracoes/index';
import Visualizar from './components/Visualizar/index';
import Login from './components/Login/SignIn';
import Chat from './components/Chat/index';
import Notificacoes from './components/Notificacoes/index';
import Perfil from './components/Perfil/index.js';

const width =  Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function NavigatorDrawer() {
  const Drawer = createDrawerNavigator();

  return (
      <Drawer.Navigator 
      initialRouteName="Bottom" 
      useLegacyImplementation 
      screenOptions={{headerShown: false, width: 260}} 
      drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Bottom" component={NavigationBottom}/>
      </Drawer.Navigator>
  )
}

function NavigationBottom() {
  const Tab = createBottomTabNavigator(); 

  return (
    <Tab.Navigator initialRouteName = "Home" screenOptions = {{headerShown: false}}>
      <Tab.Screen name = "Home" component={ Home } 
        options = {{ tabBarLabel: "Home", tabBarIcon: ({color, size}) => (<Ionicons name = {'home'} color = {color} size = {size}/>)}}
      />
      <Tab.Screen name = "Seguindo" component={ Seguindo } 
        options = {{ tabBarLabel: "Seguindo", tabBarIcon: ({color, size}) => (<Ionicons name = {'eye'} color = {color} size = {size}/>)}}
      />
      <Tab.Screen name = "Chat" component={ Chat } 
        options = {{ tabBarLabel: "Chat", tabBarIcon: ({color, size}) => (<MaterialIcons name = {'chat'} color = {color} size = {size}/>)}}
      />
    </Tab.Navigator>
  )
}

function NavigationStack() {
  const Stack = createNativeStackNavigator();
  const [abrir, setAbrir] =                 useState(true);
  const [abrirPesquisa, setAbrirPesquisa] = useState(true);
  const [busca, setBusca] =                 useState("");
  const [usuario, setUsuario] =             useState({})
  const translateY = useRef(new Animated.Value(-height)).current;
  const translateX = useRef(new Animated.Value(width)).current;
  const [categoria, setCategoria] = useState("Todas Categorias");
  const [status, setStatus] = useState("😋");

  return (
    <Provider.Provider value = {{abrir, setAbrir, translateY, categoria, setCategoria, translateX, abrirPesquisa, setAbrirPesquisa, busca, setBusca, usuario, setUsuario, status, setStatus}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drawer" useLegacyImplementation screenOptions={{headerShown: false}}>
           <Stack.Screen name="Home" component={NavigatorDrawer}/>
           <Stack.Screen name="Publicar" component={Publicar}/>
           <Stack.Screen name="Configuracoes" component={Configuracoes}/>
          <Stack.Screen name="Visualizar" component={Visualizar}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Notificacoes" component={Notificacoes}/>
          <Stack.Screen name="Perfil" component={Perfil}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider.Provider>
  )
}

export default NavigationStack;
