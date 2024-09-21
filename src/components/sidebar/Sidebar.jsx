import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
	return (
		<div className=' h-[20vh] mt-4 lg:mt-0 w-full py-2 box-border md:w-full  lg:w-[25vw] lg:h-full border-2 border-stone-700 rounded-2xl lg:p-4  flex flex-row  lg:flex-col lg:items-center lg:justify-center  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
			<SearchInput />
			<div className=' lg:divider  lg:border-b-2 lg:border-stone-500'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;


