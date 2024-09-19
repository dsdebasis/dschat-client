import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { backendUrl } from "../index.js";
const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
		

		axios.post(`${backendUrl}/api/auth/logout`, {
			withCredentials: true,
		}).then((res)=>{
			console.log(res)
                  	localStorage.removeItem("chat-user");
			setAuthUser(null);
			toast.success(res.data.message)
		}).catch((error)=>{
			console.log(error.response)
			// toast.error(error.response)
		}).finally(()=>{
			setLoading(false)
		})
	};

	return { loading, logout };
};
export default useLogout;
