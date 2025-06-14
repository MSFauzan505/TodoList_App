import { supabase } from "../lib/supabaseClient"

// get all subtask
export const getSubTodos = async () =>{
    const {data : taskIds} = await supabase
    .from('tasks')
    .select('id')

    const ids = taskIds.map(task => task.id)

    const {data, error} = await supabase
    .from('subtasks')
    .select('*')
    .in('tasks_id', ids)
    return {data, error}
}

   
// create subtask
export const createSubTodo = async (subTodo) =>{
    const {data, error} = await supabase
    .from('subtasks')
    .insert([subTodo])

    return {data, error}
}

// delete subTask
export const deleteSubTodo = async (id) =>{
    const {data, error} = await supabase
    .from('subtasks')
    .delete()
    .eq('id', id)

    return {data, error}
}