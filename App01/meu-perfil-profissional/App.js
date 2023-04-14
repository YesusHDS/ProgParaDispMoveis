import * as React from 'react';
import { Text, View, StyleSheet, Image, Card } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil Profissional</Text>

      <Image style ={styles.image} source={require('./assets/E5609C76-E178-4765-8DA4-01A81316DD6F.jpg')}></Image>

      <View>
        <Text style={styles.topic}>Dados Pessoais</Text>
        <Text style={styles.info}>Meu nome é Yesus Hadshimitra dos Santos. Tenho 19 anos e gosto de jogar.</Text>
      </View>

      <View>
        <Text style={styles.topic}>Formação</Text>
        <Text style={styles.info}>Ensino Médio - Etec Balneário Maracanã</Text>
      </View>

      <View>
        <Text style={styles.topic}>Experiência</Text>
        <Text style={styles.info}>Nenhuma</Text>
      </View>

      <View>
        <Text style={styles.topic}>Projeto</Text>
        <Text style={styles.info}>SGMRPG - Sistema Gerenciador de Mesas de RPG</Text>
      </View>
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
    fontSize: '20pt',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image:{
    width: 300,
    height: 300
  },
  topic:{
    fontSize: '14pt',
    fontWeight: 'bold',
  },
  info:{
    fontSize: '10pt',
  },
});
