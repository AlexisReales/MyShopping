import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function title(){
    return(
        <Text style={styles.title}>
            Lista de compras
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
      color: '#fff',
      backgroundColor: '#7e7eeb',
      padding: 20,
      textAlign: 'center',
    },
});