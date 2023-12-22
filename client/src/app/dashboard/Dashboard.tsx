import NavBar from "../components/NavBar";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="h-screen max-w-screen mx-auto  ">
        <NavBar />
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
