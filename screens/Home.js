import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Styles from '../Styles';

export default function Home(){
   const {isDarkmode} = useContext(ThemeContext);
 return ( 
    <View style={[styles.container,isDarkmode ? Styles.dark : Styles.light]}>
    <Text style={[styles.text, isDarkmode ? Styles.dark : Styles.light]}>
    This is the Home page compoment.
    </Text>    
    </View>
 )
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   text: {
      fontSize: 20,
   }
 });
 