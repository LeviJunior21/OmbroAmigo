import { firebase } from '../Firebase/firebaseCredentials';
import { firebaseFirestorePublicacoes } from '../Firebase/firestoreCollections';

const getPublicacoes = () => {
  let publicacoesFirebase = [];
  firebaseFirestorePublicacoes.orderBy("tempo", "desc").onSnapshot((dados) => {
    dados.forEach((pub) => {
      const { mensagem, usuario, segundos, categoria, email } = pub.data()
      publicacoesFirebase.push({
        usuario,
        mensagem,
        segundos,
        categoria,
        idPublicacao: pub.id,
        email,
        pub
      })
    })
  })
  return publicacoesFirebase;
}

const addPublicacao = (mensagem, categoria, email) => {
  const dados = {
    tempo: firebase.firestore.Timestamp.now(),
    categoria: categoria,
    mensagem: mensagem,
    segundos: new Date().getTime(),
    email: email
  }

  firebaseFirestorePublicacoes.add(dados)
  .then(() => {})
  .catch(() => {});
}

const delPublicacao = (publicacao) => {
  firebaseFirestorePublicacoes.doc(publicacao.id).delete()
  .then(() => {})
  .catch(() => {});
}

const getComentarios = async(idPublicacao) => {
  let comentarios = [];
  await firebaseFirestorePublicacoes.doc(idPublicacao).get().then((dados) => {
    let resultado = dados.data().comentarios;
    resultado.forEach((coment) => {
      comentarios.push(coment);
    })
  })
  return comentarios;
}

const sendComentario = async(idPublicacao, email, texto) => {
  await firebaseFirestorePublicacoes.doc(idPublicacao).update({
    comentarios: firebase.firestore.FieldValue.arrayUnion({
      mensagem: texto, 
      tempo: firebase.firestore.Timestamp.now(),
      segundos: new Date().getTime(),
      email: email
    })
  })
}

const getDiferencaTempo = (tempoAnterior) => {
  const tempoAtual = new Date().getTime();
  return (tempoAtual - tempoAnterior)/1000;
}

export { getPublicacoes, addPublicacao, delPublicacao, getComentarios, sendComentario, getDiferencaTempo };
