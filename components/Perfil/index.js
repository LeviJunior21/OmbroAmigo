import { useContext, useState, useEffect, useCallback } from "react";
import { SafeAreaView, StyleSheet, Dimensions, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Provider } from '../DataBase/Provider';
import { useNavigation } from "@react-navigation/native";
import { firebaseFirestoreUsuarios } from "../Firebase/firestoreCollections";
import { salvarUsuario } from "../Data/user";
import Avatar from "../Avatar/index";
import Top from './Components/Top';

export default function Perfil() {
    const navigation = useNavigation();
    const { usuario } = useContext(Provider);
    
    useEffect(()=> {
        if (usuario.email == undefined) {
            navigation.navigate("Login");
        }
    }, [])

    const [usuarioApp, setUsuario] = useState("");
    const [usuarioSobre, setUsuarioSobre] = useState("");

    const getStatus = useCallback(async (email) => {
        const collectionRef = firebaseFirestoreUsuarios;
        await collectionRef.where("email", '==', email).get().then(resultado => {
        setUsuario(resultado.docs[0].data().usuario);
        setUsuarioSobre(resultado.docs[0].data().sobre)
        });
    }, [])

    useEffect(()=>{
        getStatus(usuario.email)
    }, [])

    const salvar = (email, usuarioApp, sobre) => {
        if (email != undefined && usuarioApp != "" && sobre != "") {
            salvarUsuario(email, usuarioApp, sobre);
            navigation.navigate("Home")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Top/>
            <TouchableOpacity style={styles.avatar}>
                <Avatar email={usuario.email? usuario.email:"levi.pereira.junio@ccc.ufcg.edu.br"}/>
            </TouchableOpacity>
            <Text style={styles.textToque}>Toque na imagem para mudar o avatar</Text>
            <View style={styles.info}>
                <Text style={styles.textInfo}>Apelido</Text>
                <TextInput 
                style={styles.inputNome} 
                placeholder={"Apelido"} 
                placeholderTextColor={"gray"} 
                numberOfLines={1} 
                textColor={"white"} 
                onChangeText={(e)=>{setUsuario(e)}}
                value={usuarioApp}/>
                <Text style={styles.textInfo}>Sobre</Text>
                <TextInput 
                style={styles.inputNome} 
                placeholder={"Sobre"} 
                placeholderTextColor={"gray"} 
                multiline={true} 
                value={usuarioSobre}
                onChangeText={(e)=>{setUsuarioSobre(e)}}
                textColor={"white"}/>
            </View>
            <TouchableOpacity style={styles.salvar} onPress={()=>{salvar(usuario.email, usuarioApp, usuarioSobre)}}>
                <Text style={styles.textSalvar}>Salvar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
        alignItems: 'center',
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 100,
        backgroundColor: 'white',
        overflow: 'hidden'
    },

    textToque: {
        marginTop: 10, 
        color: 'gray'
    },

    info: {
        width: width,
        paddingHorizontal: 20,
        height: 240,
        marginTop: 20
    },

    textInfo: {
        marginTop: 10, 
        fontSize: 13,
        color: 'gray'
    },

    inputNome: {
        width: width - 40,
        minHeight: 40,
        borderBottomWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#303030'
    },

    salvar: {
        width: 100,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#349e94',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textSalvar: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})
