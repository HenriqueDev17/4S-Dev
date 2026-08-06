import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { styles } from './Styles';

export default function App() {
  return (

    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>

    <View style={styles.container}>
      <Text style={styles.textoHello}>Hello Expo</Text>
      <Text style={styles.teste}>Henrique</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
    
  );
}



