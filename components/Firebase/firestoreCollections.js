import { firebase } from './firebaseCredentials';

const firebaseFirestorePublicacoes = firebase.firestore().collection("publicacoes");
const firebaseFirestoreUsuarios = firebase.firestore().collection("usuarios");

export { firebaseFirestorePublicacoes, firebaseFirestoreUsuarios };
