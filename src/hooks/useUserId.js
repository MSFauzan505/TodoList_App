import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

const useUserId = () => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false);

  const getUserId = async () => {
    setLoading(true);
    const { id, username, error } = await getCurrentUser();
    if (error) {
      console.log(error);
    } else {
        setUserId(id)
        setUsername(username)
    }
    setLoading(false);
  };

  useEffect(()=>{
    getUserId()
  },[])

  return {
    userId,
    username,
    loading
  }
};

export default useUserId