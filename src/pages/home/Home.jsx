import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
	return (
		<section className='h-screen w-screen flex flex-col    rounded-md lg:flex-row   lg:h-[85vh] overflow-hidden   lg:justify-around'>
			<Sidebar />
			<MessageContainer />
		</section>
	);
};
export default Home;
