import { firebaseFirestoreUsuarios } from "../Firebase/firestoreCollections";

const salvarUsuario = async(email, usuario, sobre) => {
    firebaseFirestoreUsuarios.where("email", '==', email).get().then(function (resultado) {
        resultado.forEach(function (doc) {
            doc.ref.update({usuario: usuario, sobre: sobre})
        } )
    })
}

export { salvarUsuario }
