import { View, StyleSheet, Dimensions } from 'react-native';

export default function Line() {
  return (
    <View style={styles.width}/>
  )
}
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  width: {
    width: width - 32,
    height: 2,
    marginTop: 20,
    backgroundColor: 'white'
  }
  
})
