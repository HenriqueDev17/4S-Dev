
import {TaskListStyle} from "./TaskListStyle"
import { ScrollView, text } from "react-native"
import { TaskItem } from "../taskitem/TaskItem"
import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../../context/TaskContext"
import axios from "axios"

export const TaskList = () => {
    const {listagemTarefas, getTasks} = useContext(TaskContext) //dados global da context

   

    useEffect(()=>{
        getTasks()
    })

    return (
        <ScrollView style={TaskListStyle.taskListContainer}>
            {
                listagemTarefas.map((tarefa)=>{
                    return(
                      <TaskItem 
                      key={tarefa.id} 
                      id={tarefa.id} 
                      descricao={tarefa.descricao}/>  
                    )
                })
            }
        
        </ScrollView>
    )
}