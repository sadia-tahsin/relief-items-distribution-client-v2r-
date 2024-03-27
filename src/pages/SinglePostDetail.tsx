import { useNavigate, useParams } from "react-router-dom";
import { useGetSinglePostQuery } from "../redux/features/reliefPosts/singlePostApi";
import { Button } from "antd";
import { useState } from "react";
import Payment from "./dashboard/Payment";
import { useAppSelector } from "../redux/features/hooks";
import { useCurrentUser } from "../redux/features/auth/authSlice";
import { useUpdateUserMutation } from "../redux/features/reliefPosts/updateUserApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type User = {
  email: string;
  iat: string;
  exp: string;
  donationAmount: string | null;
};

const SinglePostDetail = () => {
  const { id } = useParams();
  const { data } = useGetSinglePostQuery(id);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useAppSelector(useCurrentUser) as User | null;
  const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [donationAmount, setDonationAmount] = useState<number | null>(null);

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    if (user && donationAmount !== null) {
      const updatedAmount = user.donationAmount
        ? parseInt(user.donationAmount) + donationAmount
        : donationAmount;
      const updatedUser = {
        ...user,
        donationAmount: updatedAmount.toString(),
      };
      updateUser(updatedUser); // This will update the user's donation amount in the backend
    }

    navigate('/dashboard');
  };

  return (
    <div className="my-5">
      <div className=" mx-auto my-4 px-4">
        {data && (
          <div className="border-2 border-gray-300 rounded-md shadow-md my-4">
            <div className="flex relative p-6">
              
              <img
                src={data.Image}
                alt=""
                className="w-full h-screen object-cover"
              />
             <div>
             <h1 className="text-xl md:text-3xl font-extrabold pt-5 pb-2">
                {data.Title}
              </h1>
              <p>
                {/* Add your content here */}
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
                      {user && (
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            {/* Your form fields */}
                            <div className="mb-4">
                              <p className="text-lg font-semibold mt-1"> You are donating as <span className="text-blue-600">{user.email} </span>for <span className="text-blue-600">{data.Title}</span></p>
                            </div>
                            <div className="mb-4">
                              <label htmlFor="donationAmount" className="block text-gray-700 font-semibold">Donation Amount</label>
                              <input
                                type="number"
                                id="donationAmount"
                                name="donationAmount"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter donation amount"
                                onChange={(e) => setDonationAmount(parseInt(e.target.value))}
                              />
                            </div>
                            <div className="mb-4 text-center">
                              <h2 className="text-lg text-black mt-1">Please Insert Your Card Information</h2>
                            </div>
                            <Payment />
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Confirm Payment</button>
                          <button type="button" onClick={handleCloseModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                        </div>
                      </form>
                      )}
                    </div>
                  </div>
                </div>
              )}

</div>            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SinglePostDetail;
