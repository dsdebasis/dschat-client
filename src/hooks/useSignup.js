import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { backendUrl } from "../index.js";
import axios from "axios";
const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		// try {
		// 	const res = await fetch("/api/auth/signup", {
		// 		method: "POST",
		// 		headers: { "Content-Type": "application/json" },
		// 		body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
		// 	});

		// 	const data = await res.json();
		// 	if (data.error) {
		// 		throw new Error(data.error);
		// 	}
		// 	
		// } catch (error) {
		// 	toast.error(error.message);
		// } finally {
		// 	setLoading(false);
		// }

		axios.post(`${backendUrl}/api/auth/signup`,{
			fullName, username, password, confirmPassword, gender
		},{
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
			withCredentials: true,
		}).then((res)=>{
			console.log(res.data.message)
			toast.success(res.data.message)
			localStorage.setItem("chat-user", JSON.stringify(res.data?.data));
			setAuthUser(res.data?.data);
		}).catch((error)=>{
			console.log(error.response.data.message)
			toast.error(error.response.data.message)
		}).finally(()=>{
			setLoading(false)
		})
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
