import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { userPost } = useSelector((state) => state.userState);
  const [post, setPost] = useState(false);

  useEffect(() => {
    console.log(userPost);
  }, []);

  const createPost = (e) => {
    e.preventDefault();
    setPost(!post);
  };

  return (
    <>
      <div className="w-full h-screen p-2 relative ">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="w-full border flex flex-col gap-2 ">
          <span className="xend">
            <Plus type="submit" onClick={createPost} className="btn size-7" />
          </span>

          {userPost.map((item, index) => {
            return (
              <div
                key={index}
                className="w-64 border text-sm border-black rounded-lg p-3"
              >
                <div className="w-full h-40 border border-black">
                  {/* <img src="" alt="" /> */}
                  image will be here
                </div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <h1>{item.price}</h1>
              </div>
            );
          })}
        </div>
        {post && (
          <div className="w-full h-full top-0 right-0 bg-[#ffffff4b] backdrop-blur-[5px]  absolute allcenter z-10">
            <span
              onClick={() => setPost(!post)}
              className="xend absolute top-0 right-0 "
            >
              <X className="btn size-7" />
            </span>
            <div className="w-150 border border-black flex flex-col">
              <label htmlFor="">Title</label>
              <input type="text" />
              <label htmlFor="">Description</label>
              <input type="text" />
              <label htmlFor="">Price</label>
              <input type="text" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
