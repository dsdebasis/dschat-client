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
      className="hidden w-full   lg:flex lg:justify-around  lg:items-center "
    >
      <Inputs
        
        placeholder="Search…"
        css=" h-8 w-fit rounded-md text-xs text-yellow-300 lg:w-[80%] lg:h-[5vh] lg:rounded-md"
        handleInput={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className=" border-stone-700 h-8 w-8 rounded-full  lg:btn lg:btn-circle    bg-transparent hover:bg-orange-600 lg:h-10 lg:w-10 
	 "
      >
        <IoSearchSharp className="rounded-full  outline-none  " />
      </button>
    </form>
  );
};
export default SearchInput;
