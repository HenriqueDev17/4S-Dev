import { Text, View, Image, TouchableOpacity, Alert } from "react-native"
import { TaskItemStyle } from "./TaskItemStyle"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export const TaskItem = ({ id, descricao }) => {
    //states globais
    const { deleteTask, putTaskPreview } = useContext(TaskContext)

   const deleteTaskConfirm = (tarefa) => {

    Alert.alert("Apagar", `Você quer apagar ${tarefa.descricao}`, [
        {text: "Não"},
        {text: "Sim", onPress: () => deleteTask(id)}
    ])

    }
    return (
        <View style={TaskItemStyle.cardBox}>

            <Text style={TaskItemStyle.cardText}> {descricao} - {id}</Text>
            <TouchableOpacity style={[TaskItemStyle.cardButton, TaskItemStyle.cardButtonEditColor]}
            onPress={() => {
                putTaskPreview ({id, descricao})
            }}
            
            >
                <Image style={TaskItemStyle.cardButtonImage} source={require('../../../assets/lapis.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[TaskItemStyle.cardButton, TaskItemStyle.cardButtonThasColor]}
                onPress={() => {
                    deleteTaskConfirm({id, descricao})
                }}
            >
                <Image style={TaskItemStyle.cardButtonImage} source={require('../../../assets/lixeira.png')} />
            </TouchableOpacity>
        </View>
    )
}