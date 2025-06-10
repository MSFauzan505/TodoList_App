import { supabase } from "../lib/supabaseClient"

// create task
export const createTodo = async (todo)=>{
    const {data, error} = await supabase
    .from('tasks')
    .insert([todo])

    return {data, error}
}

// delete task
export const deleteTodo = async (id)=>{
    const {data, error} = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)

    return {data, error}
}

// get all taks
export const getTodos = async ()=>{
    const { data, error } = await supabase
    .from('tasks')
    .select()
    .order('create_at', {ascending: false})

    return {data, error}
}

// get task by id
export const getTodoById = async (id)=>{
    const {data, error} = await supabase
    .from('tasks')
    .select()
    .eq('id', id)
    .single()

    return {data ,error}
}

// update task
export const updateTodo = async (id, updateField)=> {
    const {data, error} = await supabase
    .from('tasks')
    .update(updateField)
    .eq('id',id)
    
    return {data, error}
}

