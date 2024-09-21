import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";
import Inputs from "../../components/Inputs.jsx";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full order-3  flex justify-around items-center lg:items-center "
    >
      <Inputs
        
        placeholder="Search…"
        css=" max-h-8 max-w-fit rounded-md text-xs text-yellow-300"
        handleInput={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className=" border-stone-700 h-8 w-8 rounded-full btn btn-xs lg:btn lg:btn-circle    bg-transparent hover:bg-orange-600
	 "
      >
        <IoSearchSharp className="rounded-full  outline-none  " />
      </button>
    </form>
  );
};
export default SearchInput;
