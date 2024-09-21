import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='absolute bottom-1 md:bottom-1  right-4 lg:static lg:self-start lg:order-0  '>
			{!loading ? (
				<BiLogOut className='lg:w-6 lg:h-6 text-orange-300 lg:text-white cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
