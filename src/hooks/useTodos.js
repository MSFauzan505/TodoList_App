import { useEffect, useState } from "react";
import { createTodo, getTodo } from "../services/todoService";

const useTodos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);

  // create a new task
  const handleCreateTodo = async (newTask) => {
    setLoading(true);
    setError(null);
    const { data, error } = await createTodo(newTask);
    if (error) {
      setError(error);
      console.log(error);
    } else {
        setTodos((prev)=> [data[0], ...prev])
    }
    setLoading(false);
  };

  //fetch all task
  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await getTodo();
      if (error) throw error;

      setTodos(data || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    handleCreateTodo,
  };
};

export default useTodos;
