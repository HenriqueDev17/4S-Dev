import { View, Text } from "react-native"
import { FormTaskStyles } from "./FormTaskStyles"

export const FormTask = () => {
    return (
        <View style={FormTaskStyles.frmCadTask}>
            <Text style={FormTaskStyles.frmCadTitle}>Cadastro de Tarefas</Text>
        </View>
    )
}