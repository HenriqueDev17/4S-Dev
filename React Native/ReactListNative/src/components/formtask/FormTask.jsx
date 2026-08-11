import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { FormTaskStyles } from "./FormTaskStyles"
import { useState } from "react"

export const FormTask = () => {

    const [taskValue, setTaskValue] = useState("")
    const saveTask = () => {
        console.log(`Texto Digitado ${taskValue}`)
        Alert.alert("Adicionar Tarefa", "Tarefa Adicionada!", [{text:"Okk", onPress: () => setTaskValue (`Okk 2 Pressed`)},])
    }
    return (
        <View style={FormTaskStyles.FormTaskBox}>
            <TextInput style={FormTaskStyles.taskInputName}
            placeholder="Adicione uma tarefa"
            value={taskValue}
            onChangeText={(textoDigitado)=>{
                setTaskValue(textoDigitado)
            }}/>
            <TouchableOpacity style={FormTaskStyles.taskButton}
            onPress={()=>{saveTask()}}>
                <Text style={FormTaskStyles.taskButtonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}