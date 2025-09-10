import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { userPost } = useSelector((state) => state.userState);

  useEffect(() => {
    console.log(userPost);
  }, []);

  return (
    <>
      <div className="w-full h-screen allcenter">
        <div>Dashboard</div>
      </div>
    </>
  );
};

export default Dashboard;
