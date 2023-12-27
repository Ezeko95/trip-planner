import NavBar from "../components/NavBar";
import TripCard from "../components/TripCard";
import SimpleMap from "../components/GoogleMap";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="h-screen max-w-screen mx-auto  ">
        <NavBar />
        <div className="px-4 py-6 sm:px-0">
          {/* <div className="grid grid-col-6 justify-center items-center border-4 border-dashed border-gray-200 rounded-lg h-96">
            {" "}
            <TripCard />{" "}
          </div> */}
          <div className="">
            <SimpleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
