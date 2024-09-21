import useGetConversations from "../../hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utils/emojis.js";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="h-[20vh] w-full  lg:max-w-[20vw] lg:h-full    flex flex-row  lg:flex-col gap-x-1  lg:gap-x-0 lg:justify-around px-2">
      <div className="h-full w-full  items-center  lg:h-full  overflow-x-scroll  flex gap-x-5 lg:flex-col lg:justify-evenly lg:items-center lg:overflow-auto bg-transparent border-none outline-none lg:bg-transparent ">
        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))}
      </div>

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
