import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [number, setNumber] = useState(0)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas na Loja</Text>
      <View style={styles.painel}>
        <Text style={styles.painelNumber}>{number}</Text>
      </View>
      <Pressable 
        style={[styles.botao, styles.greenBotao]}
        onPress={()=>{setNumber(number+1)}}
      >+</Pressable>
      <Pressable 
        style={[styles.botao, styles.redBotao]}
        onPress={()=>{
          if(number!=0)
            setNumber(number-1)
        }}
      >-</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title:{
    fontSize: '18pt',
    marginBottom: 20
  },
  painel:{
    width: 300,
    height: 300,
    borderWidth: 2
  },
  painelNumber:{
    textAlign: 'center',
    marginTop: 30,

    fontSize: 160,
    color: 'red'
  },
  botao:{
    marginTop: 20,

    width: 300,

    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10
  },
  greenBotao:{
    backgroundColor: 'lightgreen',
    borderWidth: 2,
    borderColor: 'green',
  },
  redBotao:{
    backgroundColor: '#FFCCCB',
    borderWidth: 2,
    borderColor: 'red',
  }
});
