import { StyleSheet, Text, View,Button } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import { useTheme } from '../context/useTheme'
import Styles from '../Styles';

export default function Setup () {
   const { isDarkmode } = useTheme()
 return ( 
   <View style={[styles.container, isDarkmode ? Styles.dark : Styles.light]}>
    <ThemeSwitchButton /> 
   </View>
 );
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