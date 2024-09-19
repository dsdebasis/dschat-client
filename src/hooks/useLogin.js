import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";
import axios from "axios";
import { backendUrl } from "../index.js";
const useLogin = () => {

  const [loading, setLoading] = useState(false);
  const { setAuthUser, authUser } = useAuthContext();


  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
 
      // const res = await fetch("/api/auth/login", {
      // 	method: "POST",
      // 	headers: { "Content-Type": "application/json" },
      // 	body: JSON.stringify({ username, password }),
      // });

      axios
        .post(
          `${backendUrl}/api/auth/login`,
          { username, password },
          {
            headers: {
              "content-type": "application/json",
              accept: "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
           localStorage.setItem("chat-user", JSON.stringify(res.data.data));
           setAuthUser(res.data.data);
          console.log(res.data.data)
          toast.success(res.data.message);
        })
        .catch((error) => {
          // console.log(error.response.data.message);
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });

  };

  return {loading,login}
};

//  localStorage.setItem("chat-user", JSON.stringify(data));
//  setAuthUser(data);
//} catch (error) {
//  toast.error(error.message);
//} finally {
// setLoading(false);
//}

export default useLogin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
