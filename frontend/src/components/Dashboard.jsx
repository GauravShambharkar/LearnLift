import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";

const Dashboard = () => {
  const { userPost } = useSelector((state) => state.userSlice);
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
        {post && <CreatePost post={post} setPost={setPost} />}
      </div>
    </>
  );
};

export default Dashboard;
