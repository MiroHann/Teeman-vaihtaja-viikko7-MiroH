import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainAppbar from './components/MainAppbar';
import Home from './screens/Home'
import Setup from './screens/Setup';
import ThemeProvider from './context/ThemeProvider'
export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#666' barStyle="light-content" />
        <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{ header: (props) => 
        <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff"/> 
        }}
        >
          <Stack.Screen name="Home">
            {() => 
            <Home />
            }
          </Stack.Screen>
          <Stack.Screen name="Settings" component={Setup}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>    
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
