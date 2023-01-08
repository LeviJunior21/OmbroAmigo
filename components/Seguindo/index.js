import { View, StyleSheet, ScrollView, Dimensions, RefreshControl } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import Top from './Top.js';

export default function Seguindo() {

  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false)      
    });
  }, []);
  
  useEffect(()=> onRefresh(), []);

  return (
    <View style = {styles.janela}>
      <Top/>
      <ScrollView 
        style = {styles.scroll}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
         />}
      >
        
      </ScrollView>
    </View>
  )
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  janela: {
    flex: 1,
    backgroundColor: "gray",
  }, 

  scroll: {
    width: width,
    height: height - 60
  }
})
