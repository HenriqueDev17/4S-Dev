
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "./Styles";
import { Header } from "./components/header/Header";
import { FormTask } from "./components/formtask/FormTask";
import { TaskList } from "./components/tasklist/TaskList"
import { TaskProvaider } from "./context/TaskContext";


function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <TaskProvaider>
                <View style={styles.container}>
                    <Header />
                    <FormTask />
                    <TaskList/>
                    <StatusBar style="auto" />
                </View>
                </TaskProvaider>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}



export default App