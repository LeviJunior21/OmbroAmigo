import { Text } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { firebaseFirestoreUsuarios } from '../Firebase/firestoreCollections';

export default function Sentimento(props) {

  const [sentimento, setSentimento] = useState("");

  const getStatus = useCallback(async (email) => {
    const collectionRef = firebaseFirestoreUsuarios;
    await collectionRef.where("email", '==', usuario).get().then(resultado => {
      setSentimento(resultado.docs[0].data().sentimento);
    });
  }, [])

  useEffect(() => {
    getStatus(props.usuario)
  }, [])

  return (
    <Text>{sentimento}</Text>
  )
}
