import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}
      contentContainerStyle={styles.content}
      >   
    <ScrollView style={styles.container}>
      <Text style={styles.Text}>Bem Vindo ao React List, um aplicativo e feito com react native e expo</Text>
      <StatusBar style="auto" />
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24
  }
});
