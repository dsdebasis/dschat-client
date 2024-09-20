import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { backendUrl } from "../index.js";
import axios from "axios";
const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		setLoading(true);

		const getConversations = async () => {
		axios.get(`${backendUrl}/api/users`, {},{
			withCredentials: true
		},{
		
		}).then((res) => {
			// console.log(res.data.data)
			setConversations(res.data.data);
		}).catch((error) => {
			console.log(error.response.data)
		}).finally(() => {
			setLoading(false);
		})
	};		
		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;
