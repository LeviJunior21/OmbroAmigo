import { StyleSheet, View, Dimensions, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'; 
import { RadioButton,  } from 'react-native-paper'; 
import { Picker } from '@react-native-picker/picker';
import { useState, useContext, useEffect } from 'react'; 
import { categorias, buscarCategoria } from '../DataBase/categorias';
import { useNavigation } from '@react-navigation/native';
import { Provider } from '../DataBase/Provider';
import { addPublicacao } from '../Data/posts';
import Icons from 'react-native-vector-icons/Ionicons';

function enviar(navigation, mensagem, categoria, email) {
  if (mensagem != "" && email != undefined && buscarCategoria(categoria) != 0) {
    addPublicacao(mensagem, buscarCategoria(categoria), email);
    navigation.navigate('Home');
  }
}

export default function App(){ 
  const [texto, setTexto] = useState();
  const [botao, setBotao] = useState(true);
  const { usuario } = useContext(Provider);
  const [ categoriaSelecionada, setCaregoriaSelecionada ] = useState("");
  const navigation = useNavigation();

  useEffect(()=> {
    if (usuario.email == undefined) {
      navigation.navigate("Login");
    }
  }, [])

  return( 
    <View style={styles.janela}> 
      <View style={styles.topo}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Home')}}> 
          <Icons name='arrow-back' size={30} color={'white'}></Icons>
        </TouchableOpacity> 
        <Text style={styles.textoTopo}>Escreva algo</Text>
        <TouchableOpacity onPress={() => {
          enviar(navigation, texto, categoriaSelecionada, usuario.email)
          }}> 
          <Icons name='send' size={20} color={'white'}></Icons> 
        </TouchableOpacity> 
      </View> 
      <Picker 
        style={styles.picker} 
        selectedValue = {categoriaSelecionada}
        onValueChange = {(value) => setCaregoriaSelecionada(value)}
        >   
        {categorias.map( categoria => 
        <Picker.Item 
          value={categoria.categoria}
          color={'black'} 
          label={categoria.categoria}>
        </Picker.Item>)}
      </Picker> 
      <View style={styles.botoes}>
        <Text style={styles.radioButton}>Tipo: </Text>  
        <RadioButton value={botao} status={botao? 'checked': 'unchecked'}  onPress = {() => setBotao(!botao)}></RadioButton> 
        <Text style={styles.radioButton}>Desabafo:</Text> 
        <RadioButton value={!botao} status={botao? 'unchecked': 'checked'} onPress = {() => setBotao(!botao)}></RadioButton> 
        <Text style={styles.radioButton}>Outro</Text> 
      </View> 
      <ScrollView style={styles.scroll}>
        <TextInput style={styles.entrada} onChangeText={(el)=> {setTexto(el)}} multiline={true} placeholder={'Desabafe'}> 
        </TextInput>
      </ScrollView>
    </View>
  ) 
}

const largura = Dimensions.get('window' ).width; 
const altura = Dimensions.get('window').height; 

const styles = StyleSheet.create({
  janela: {
    width: largura, 
    height: altura, 
  },

  topo: {
    width: largura, 
    height: 60, 
    backgroundColor: '#009181', 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 10 
  },

  textoTopo: {
    fontSize: 20, 
    color: 'white', 
    fontWeight: '500'   
  }, 

  botoes: {
    width: largura, 
    height: 40, 
    borderTopWidth: 1, 
    borderBottomWidth: 1,
    justifyContent: 'flex-start',   
    alignItems: 'center', 
    flexDirection: 'row',  
    borderColor: 'gray'
  }, 

  picker: {
    width: largura, 
    height: 50, 
    backgroundColor: 'transpent'
  }, 

  radioButton: {
    color: 'black'
  },

  entrada: {
    width: largura, 
    height: altura - 150, 
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexWrap: 'wrap', 
    textAlignVertical: 'top'
  }, 

  scroll: {
    width: largura, 
    height: altura - 150
  }, 
})
