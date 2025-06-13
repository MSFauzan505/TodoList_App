import { useEffect, useState } from "react"
import { createSubTodo, deleteSubTodo, getSubTodos } from "../services/subServices"

const useSubTodo = ()=>{
    const [subTasks, setSubTasks] = useState([])
    const [loading, setLoading] = useState(false)

    // fetch subtasks
    const fetchSubTodos  = async ()=>{
        setLoading(true)
        const {data, error} = await getSubTodos()
        if(error){
            console.log(error)
        }else{
            setSubTasks(data)
        }
        setLoading(false)
    }

    // create new subtask
    const createNewSubTask = async (newSubTask) =>{
        setLoading(true)
        const {data, error} = await createSubTodo(newSubTask)
        if(error){
            console.log(error)
        }else{
            setSubTasks((prev)=> [data, ...prev])
        }
        setLoading(false)
    }

    // remove subtask
    const removeSubTask = async (subId) => {
        setLoading(true)
        const { error} = await deleteSubTodo(subId)
        if(error){
            console.log(error)
        }else{
            setSubTasks((prev)=> prev.filter((subTask)=> subTask.id !== subId))
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchSubTodos()
    }, [subTasks])
    
    return {
        loading,
        subTasks,
        createNewSubTask,
        removeSubTask
    }
}

export default useSubTodo