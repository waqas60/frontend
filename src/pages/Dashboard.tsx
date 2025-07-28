import { useState } from "react";
import MainMenu from "../components/MainMenu";
import Sidebar from "../components/Sidebar";
import AddNewContent from "../components/AddNewContent";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 bg-zinc-50 h-screen">
        <Sidebar />
      </div>
      <div className="ml-10 flex-1 h-screen overflow-y-auto bg-zinc-100 p-4">
        <MainMenu fn={() => setIsOpen(true)} />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-200/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <AddNewContent modalOpen={isOpen} fn={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
