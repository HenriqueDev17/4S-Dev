
import { createContext, useState } from "react";
import api from "../service/FakeAPIService";
export const TaskContext = createContext();

export const TaskProvaider = ({ children }) => {
  const [listagemTarefas, setListagemTarefas] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [IdToEdit, setIdToEdit] = useState();

  const getTasks = async () => {
    try {
      const APIReturn = await api.get("/taskpoint");
      const APIData = await APIReturn.data;

      setListagemTarefas(APIData);
    } catch (error) {
      console.log("Deu ruim na chamada da api");
      console.log(error);
    }
  };

  const postTask = async (taskValue) => {
    try {
      await api.post("/taskpoint", {
        descricao: taskValue,
      });
      const APIData = await APIReturn.data;

      setListagemTarefas(APIData);
      getTasks(); //lista as tarefas novamente
    } catch (error) {
      console.log("Deu ruim na chamada da api");
      console.log(error);
    }
  };

  //visualiza os dados no formulário
  const putTaskPreview = (tarefa) => {
    setTaskValue(tarefa.descricao);
    setEditMode(true);
    setIdToEdit(tarefa.id);
    console.log(IdToEdit)
  };

  //putTask
    const putTask = async (IdToEdit) => {
        try {
            await api.put(`/taskpoint/${IdToEdit}`,
                {
                    descricao: taskValue

                });
            await getTasks()
            setIdToEdit(0)
            setTaskValue("")
            setEditMode(false)

        } catch (error) {
            console.log(error)
        }
    }

  const deleteTask = async (id) => {
    try {
      const APIReturn = await api.delete(
        `/taskpoint/${id}`,
      );
      const APIData = await APIReturn.data;

      await getTasks();
    } catch (error) {}
  };

  return (
    <TaskContext.Provider
      value={{
        listagemTarefas,
        setListagemTarefas,
        getTasks,
        postTask,
        putTask,
        deleteTask,
        taskValue,
        setTaskValue,
        putTaskPreview,
        editMode,
        setEditMode,
        IdToEdit,
        setIdToEdit,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
