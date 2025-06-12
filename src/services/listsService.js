import { supabase } from "../lib/supabaseClient"

// fetch all lists
export const getLists = async ()=>{
    const {data: {user}} = await supabase.auth.getUser()
    const {data, error} = await supabase
    .from('lists')
    .select('*')
    .eq('profiles_id', user.id)

    return {data, error}
}

// add new list
export const createList = async (newList)=>{
    const {data, error} = await supabase
    .from('lists')
    .insert([newList])

    return {data, error}
}

// delete list
export const deleteList = async (id)=>{
    const { error} = await supabase
    .from('lists')
    .delete()
    .eq('id', id)
    
    return { error}
}

