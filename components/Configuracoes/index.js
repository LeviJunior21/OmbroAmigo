import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Top from './components/Top';
import Notificacoes from './components/Notificacoes.js';
import Desabafos from  './components/Desabafos';
import Chat from './components/Chat';
import Perfil from './components/Perfil';
import Categoria from './components/Categorias';
import Login from './components/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Top/>
        <Notificacoes/>
        <Desabafos/>
        <Chat/>
        <Perfil/>
        <Categoria/>
        <Login/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#303030"
  },
});
