import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';

import styles from './styles'
import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = 'Ola bla bla bla bla';


  function navigatioBack() {
    navigation.goBack()
  }

  function sendMail() {

  }

  function sendWhatsapp() {
    Linking.openURL(`whastapp://send?phone=5511946557082?text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigatioBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Ong:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>{incident.titulo}</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}