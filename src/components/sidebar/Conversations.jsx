import useGetConversations from "../../hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/emojis.js";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className=' h-[20vh] w-full lg:w-full lg:h-full lg:overflow-auto  flex flex-row  lg:flex-col gap-x-2  lg:gap-x-0 lg:ustify-evenly lg:mt-10'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;


