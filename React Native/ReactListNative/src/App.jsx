
import {Text, View } from "react-native";
import { SafeAreaProvider ,SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "./Styles";
import { Header } from "./components/header/Header";
import { FrmCadTask } from "./components/frmCadTask.jsx/FrmCadTask";


function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <Header/>
                <FrmCadTask/>
        <View style={styles.container}>
            <Text>My App</Text>
            <StatusBar style="auto" />
        </View>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}



export default App