import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
	return (
		<div className='h-[25%] w-full lg:w-[25%] lg:h-full border-2 border-stone-700 rounded-2xl lg:p-4  flex flex-col items-center justify-center p-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<SearchInput />
			<div className=' divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;


