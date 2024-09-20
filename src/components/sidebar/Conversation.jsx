import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../zustand/useConversation.js";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={` border-2 border-stone-700 shadow-2xl bg-gradient-to-l from-stone-800 w-[5.5rem] h-[5.5rem]  text-xs lg:h-full  lg:w-full flex flex-col justify-center items-center lg:flex-row gap-2 lg:items-center hover:bg-yellow-600 rounded-full cursor-pointer
				${isSelected ? "bg-gradient-to-r from-pink-500 to-blue-500" : ""}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
              <div className={`h-8 w-8 avatar ${isOnline ? "online" : ""}`}>
               <div className="rounded-full shadow-2xl ">
                  <img src={conversation.profilePic} alt="user avatar" />
                </div>
              </div>

              <div className=" lg:flex-col lg:flex-1 overflow-hidden text-yellow-300 text-xs">
                <div className="flex gap-3 lg:justify-between">
                  <h1 className="font-bold  overflow-hidden text-[0.7rem]">{conversation.fullName}</h1>
                  <span className="hidden lg:block lg:text-xl">{emoji}</span>
              </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
