import { useEffect, useState } from "react";
import { createList, deleteList, getLists } from "../services/listsService";

const useLists = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);

  // get all lists
  const fetchAllLists = async () => {
    try {
      setLoading(true);
      const { data, error } = await getLists();
      if (error) {
        console.log(error);
      }
      setLists(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // add new list
  const createNewList = async (newList) => {
    setLoading(false);
    const { data, error } = await createList(newList);
    if (error) {
      console.log(error);
    } else {
      setLists((prev) => [data, ...prev]);
    }
    setLoading(false);
    return {error}
  };

  const removeList = async (id)=>{
    setLoading(true)
    const {data, error} = await deleteList(id)
    if(error){
        console.log(error)
    }else{
        setLists(prevLists => prevLists.filter(list => list.id !== data.id))
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchAllLists()
  },[lists])

  return {
    lists,
    createNewList,
    removeList,
    setLists,
    loading
  }
};

export default useLists;
