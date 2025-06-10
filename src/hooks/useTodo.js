import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../services/todoService";

const defaultForm = {
  status: false,
  title: "",
  desc: "",
  list_id: null,
  tags_id: [],
};

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(defaultForm);

  // get all taks
  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await getTodos();
    if (error) setError(error);
    else setTodos(data);
    setLoading(false);
  };

  // create new task
  const addTodo = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await createTodo(form);
    if (!error) {
      if (data && data.length > 0) {
        setTodos((prev) => [data[0], ...prev]);
      }
      setForm(defaultForm);
    } else {
      setError(error);
    }
    setLoading(false);
  };

  //delete taks
  const removeTodo = async (id) => {
    setLoading(true);
    setError(null);
    const { error } = await deleteTodo(id);
    if (error) {
      setError(error);
    } else {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
    setLoading(false);
  };

  //   get task by id
  const getById = async (id) => {
    setLoading(true);
    setError(null);
    const { data, error } = await getTodoById(id);
    if (error) {
      setError(error);
    } else {
      setForm({
        status: data.status,
        title: data.title,
        desc: data.desc,
        list_id: data.list_id,
        tags_id: data.tags_id || [],
      });
    }
    setLoading(false);
  };

  //   update task
  const updateSelectTodo = async (id, updatedForm) => {
    setLoading(true);
    setError(null);
    const { data, error } = await updateTodo(id, updatedForm);
    if (error) {
      setError(error);
    } else {
      setTodos((prev) => prev.map((todo) => (todo.id === id ? data[0] : todo)));
      setForm(defaultForm);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);


  return {
    form,
    setForm,
    todos,
    addTodo,
    removeTodo,
    getById,
    updateSelectTodo,
    loading,
    error,
  };
};

export default useTodo;
