import { supabase } from "../lib/supabaseClient"

// get all subtask
export const getSubTodos = async () =>{
    // ambil id tasks untuk di sama dengan sesuai tasks masing
    const {data, error} = await supabase
    .from('subtasks')
    .select('*')
    // .eq()
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