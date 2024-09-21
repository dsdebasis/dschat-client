import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../zustand/useConversation.js";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <section
        className={`  h-fit p-2 lg:border-2 lg:border-stone-700 w-full   rounded-full  lg:h-full lg:w-full     text-xs  lg:max-h-[9.5vh]  lg:max-w-full flex flex-col   lg:flex-row   lg:hover:bg-yellow-600  cursor-pointer lg:rounded-2xl lg:justify-around lg:items-center  lg:px-2 lg:py-0  ${isSelected ? "lg:bg-gradient-to-bl lg:from-blue-700 lg:to-pink-400" : "" }`} onClick={() => setSelectedConversation(conversation)}>
             <div className={`h-full w-full place-items-center md:justify-center lg:h-14 lg:w-14 avatar ${isOnline ? "online" : ""}`}>

                   <div  className={`rounded-full shadow-2xl h-[5rem] w-[5rem] lg:max-h-full lg:max-w-full ${isSelected ? "border-4 border-blue-600" :""}`}>
                     <img src={conversation.profilePic} alt="user avatar"  />
                   </div>
             </div>

            <div className=" lg:w-[70%] flex justify-center items-center  overflow-hidden text-yellow-300 text-xs lg:flex lg:justify-evenly">
            
                <h1 className="  overflow-hidden text-[0.9rem] mt-1 lg:m-0 lg:text-base">
                  {conversation.username}
                </h1>
                <h1 className="hidden lg:block lg:text-xl">{emoji}</h1>
              
            </div>
      </section>

      {!lastIdx && <div className="divider my-0 py-0 h-1 border-b-2 border-stone-500" />}
    </>
  );
};
export default Conversation;
