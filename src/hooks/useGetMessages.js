import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";
import { backendUrl } from "../index.js";
const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		setLoading(true);

		let getMessages = function(){
			axios.get(`${backendUrl}/api/messages/${selectedConversation._id}`,{
				withCredentials: true
			}).then((res) => {
				console.log(res.data.data)
				setMessages(res.data.data)
			}).catch((error) => {
					console.log(error)
					toast.error(error)
		        }).finally(()=>{
                             setLoading(false)
			})
		}
		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;
