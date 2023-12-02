import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import {Dimensions} from 'react-native';
import { Text, View, useThemeColor } from "./Themed";
import { normalize } from '../lib/fontNormilize';

const HomeButton = () => {  
  return (
    <View style={{ padding: 20}}>
      <Link href="/" style={styles.button} asChild>
        <Pressable>
            <Text style={{ color: '#000', fontSize: normalize(17), fontWeight: '600'}}>Go Home</Text>
        </Pressable>
        </Link>
    </View>
  )
}

export default HomeButton

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 30,
        width: Dimensions.get('window').width * .7, // 70% width of the screen
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})