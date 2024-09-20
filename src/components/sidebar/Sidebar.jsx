import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
	return (
		<div className='h-[25%] w-full lg:w-fit lg:h-full border-2 border-stone-700 rounded-2xl lg:p-4  flex flex-col items-center justify-center p-2'>
			<SearchInput />
			<div className='hidden divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;


