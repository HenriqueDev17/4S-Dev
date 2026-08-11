
import {TaskListStyle} from "./TaskListStyle"
import { ScrollView, text } from "react-native-web"
import { TaskItem } from "../taskitem/TaskItem"
import { useState } from "react"

export const TaskList = () => {
    const [listaTarefas, setListaTarefas] = useState([
       
    ])



    const getTasks = async () => {
       try {
        const APIReturn = await axios.get("http:172.16.1.138:3000/taskpoint")
        const APIData = await APIReturn.data

        setListaTarefas(APIData)
       } catch (error) {
        console.log("Deu ruim na chamada da api");
        console.log(error);
       }
    }

    const cadTasks = async () => {
        console.log("FUNÇÃO POST EM DESENVOLVIMENTO")
    }

    
    const putTask = () => {
        console.log("FUNÇÃO PUT EM DESENVOLVIMENTO")
    }

    const deleteTask = () => {
        console.log("FUNÇÃO DELETE EM DESENVOLVIMENTO")
    }

    return (
        <ScrollView style={TaskListStyle.taskListContainer}>
            {
                listaTarefas.map((tarefa)=>{
                    return(
                      <TaskItem dados={tarefa}/>  
                    )
                })
            }
        
        </ScrollView>
    )
}