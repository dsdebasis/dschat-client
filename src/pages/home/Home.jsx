import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
	return (
		<section className='h-full w-full flex flex-col  gap-y-5  rounded-md lg:flex-row   lg:h-[80vh] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 lg:justify-around'>
			<Sidebar />
			<MessageContainer />
		</section>
	);
};
export default Home;
