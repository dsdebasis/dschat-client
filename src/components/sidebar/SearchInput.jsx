import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";
import Inputs from "../../components/inputs.jsx";
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
      className="w-full order-2  flex justify-around items-center lg:items-center "
    >
      <Inputs
        type="text"
        placeholder="Search…"
        css="input input-bordered rounded-full max-h-8 max-w-fit"
        handleInput={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="border-2 border-stone-700 h-10 w-10 rounded-full btn btn-xs lg:btn lg:btn-circle    text-white
	 "
      >
        <IoSearchSharp className="rounded-full  outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
