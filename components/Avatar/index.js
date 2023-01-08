import { useCallback, useEffect, useState } from 'react';
import { firebaseFirestoreUsuarios } from '../Firebase/firestoreCollections';
import Avatar from './Avatar.js';

export default function UseAvatar(props) {
  const [avatar, setAvatar] = useState({});
  
  const getStatus = useCallback(async (email) => {
    const collectionRef = firebaseFirestoreUsuarios;
    await collectionRef.where("email", '==', email).get().then(resultado => {
      setAvatar(resultado.docs[0].data().avatar);
    });
  }, [])

  useEffect(() => {
    getStatus(props.email)
  }, [])

  return (
    <Avatar
    seed={avatar.seed}
    skin={avatar.skin}
    top={avatar.top}
    hairColor={avatar.hairColor}
    clothes={avatar.clothes}
    clothesColor={avatar.clothesColor}
    eyes={avatar.eyes}
    eyebrow={avatar.eyebrow}
    mouth={avatar.mouth}
    facialHair={avatar.facialHair}
    facialHairColor={avatar.facialHairColor}
    accessories={avatar.accessories}
    accessoriesColor={avatar.accessoriesColor}
    ></Avatar>
  )
}
