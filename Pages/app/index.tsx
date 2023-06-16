import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function app() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        MyShopping
      </Text>
      <Text style={styles.subtitle}>
        montar sua lista de compra, te ajuda nas compras
      </Text>

      <View style={styles.cccontainer}> 
        <TextInput placeholder='e-mail' style={styles.text} />
        <TextInput placeholder='senha' style={styles.text} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ccontainer}>
        <Text style={styles.footer}>
          Recuperar senha
        </Text>

        <Text style={styles.footer}>
          Criar minha conta
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#857ce0',
  },
  subtitle:{
    color: '#857ce0',
    marginBottom: 20,
  },
  text:{
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  button:{
    backgroundColor: '#2ab76b',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  cccontainer:{
    display: 'flex',
    flexDirection: 'column',
  },
  buttontext:{
    textAlign: 'center'
  },
  ccontainer:{
    display: 'flex',
    flexDirection: 'row',
  },
  footer:{
    margin: 15,
  }
});
