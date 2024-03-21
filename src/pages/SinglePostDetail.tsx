import { useNavigate, useParams } from "react-router-dom";
import { useGetSinglePostQuery } from "../redux/features/reliefPosts/singlePostApi";
import { Button } from "antd";
import { useState } from "react";
import Payment from "./dashboard/Payment";
import { useAppSelector } from "../redux/features/hooks";
import { useCurrentUser } from "../redux/features/auth/authSlice";
//import { FieldValues, SubmitHandler } from "react-hook-form";
type User = {
  email: string;
  iat:string; 
  exp:string
};
const SinglePostDetail = () => {
  const { id } = useParams(); // Get the id from the URL parameters
  const { data } = useGetSinglePostQuery(id);// Pass the id to the useGetSinglePostQuery hook
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(data);
  const user = useAppSelector(useCurrentUser) as User | null;

  const navigate = useNavigate()
  const handleEdit = () => {

    setIsModalVisible(true);
  };

  const handleCloseModal = () => {

    setIsModalVisible(false);
  
  };
  const handleConfirmation = () => {
    navigate('/dashboard')
  }

  return (
    <div className="my-5">
      <div className="w-2/3 mx-auto my-4 px-4">
        {data && (
          <div className="border-2 border-gray-300 rounded-md shadow-md my-4">
            <div className="relative p-6">
              <img
                src={data.Image}
                alt=""
                className="object-cover w-full h-48 md:h-auto"
              />
              <h1 className="text-xl md:text-3xl font-extrabold pt-5 pb-2">
                {data.Title}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto quas dolores consectetur quibusdam aliquam numquam
                perspiciatis totam, voluptate deserunt necessitatibus, error
                est, sint vel. Corporis maiores unde velit veniam eum
                voluptates, placeat ratione molestias veritatis voluptate autem
                non aspernatur nisi eligendi rerum quod. A velit nam quidem
                perspiciatis voluptates qui molestias accusantium quam sed
                harum? Inventore sapiente hic facilis a quidem quos deleniti.
                Est, architecto natus vel repellat, incidunt amet minima alias
                exercitationem quis at praesentium quas blanditiis eum rem,
                laboriosam dolorem! Animi odio quisquam saepe nobis blanditiis
                nulla qui optio velit atque eum, repellendus, ipsa earum tempore
                voluptatibus impedit.
              </p>
              <h3 className="text-xl font-bold pt-5 pb-2">{`Category: ${data.Category}`}</h3>
              <h3 className="text-xl font-bold pt-5 pb-2">{`Amount: ${data.Amount}`}</h3>
              <Button onClick={() => handleEdit()}>Donate Now</Button>
              {isModalVisible && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      {user && (<form>
  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    {/* Your form fields */}
    <div className="mb-4">
      {/* <label className="block text-gray-700">Donating as</label> */}
      <p className="text-lg font-semibold mt-1"> You are donating as <span className="text-blue-600">{user.email} </span>for <span className="text-blue-600">{data.Title}</span></p>
    </div>
    
    <div className="mb-4 text-center">
      {/* <label htmlFor="title" className="block text-gray-700">Title</label> */}
      <h2 className="text-lg text-black mt-1">Please Insert Your Card Information</h2>
    </div>
    <Payment></Payment>
  </div>
  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
    <button onClick={handleConfirmation} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Confirm Payment</button>
    <button type="button" onClick={handleCloseModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
  </div>
</form>
)}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SinglePostDetail;
