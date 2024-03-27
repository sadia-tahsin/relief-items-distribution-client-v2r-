import { useState } from "react";
import { useGetAllPostsQuery } from "../../redux/features/reliefPosts/reliefPostsApi";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useUpdatePostMutation } from "../../redux/features/reliefPosts/updatePostApi";
import { useDeletePostMutation } from "../../redux/features/reliefPosts/deletePostApi";


const Supplies = () => {
  const { data } = useGetAllPostsQuery(undefined);
  const [selectedPost, setSelectedPost] = useState<any>(null); // State to store the selected post
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility
 

//   const { email } = useAppSelector((state: RootState) => state.auth.user);

  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation()
  const { handleSubmit } = useForm();

  const handleEdit = (post: any) => {
      setSelectedPost(post);
      setIsModalVisible(true);
  };

  const handleCloseModal = () => {
      setSelectedPost(null);
      setIsModalVisible(false);
  };
  const handleDelete = async(id:string) => {
      const res = await deletePost(id)
      console.log(res)
      if ('data' in res) {
        Swal.fire({
            icon: "success",
            title: "One post has been deleted",
            showConfirmButton: false,
            timer: 1500
        });
        window.location.reload();
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
     const updatedPost = { ...selectedPost, ...formData }; // Combine existing post data with form data
     const res = await updatePost(updatedPost);
      console.log(formData);
      if ('data' in res) {
          Swal.fire({
              icon: "success",
              title: "Your post has been updated",
              showConfirmButton: false,
              timer: 1500
          });
          window.location.reload();
      }
  };

    return (
        <div>
        
        <div className="grid grid-cols-1 m-10 place-content-center">
            {/* Your table */}
            <table className="border-separate border-spacing-2 border border-slate-500">
                <thead>
                    <tr className="text-left">
                        <th>Title</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((post:{_id:string,Image: string, Title: string, Category: string, Amount: string, Description: string}) => (
                            <tr key={post._id}>
                                <td>{post.Title}</td>
                                <td>{post.Category}</td>
                                <td>{post.Amount}</td>
                                <td className="text-center">
                                    <Button onClick={() => handleEdit(post)}>Edit</Button>
                                    <Button onClick={() => handleDelete(post._id)}>Del</Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            {/* Modal */}
            {isModalVisible && selectedPost &&(
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <form  onSubmit={handleSubmit(onSubmit)}>
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                   
                                    <div className="mb-4">
                                        <label htmlFor="Image" className="block text-gray-700">Image URL</label>
                                        <input type="text" id="Image" className="form-input mt-1 w-full p-2" value={selectedPost.Image} onChange={(e) => setSelectedPost({ ...selectedPost, Image: e.target.value })} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="title" className="block text-gray-700">Title</label>
                                        <input type="text" id="title" className="form-input mt-1 w-full p-2" value={selectedPost.Title} onChange={(e) => setSelectedPost({ ...selectedPost, Title: e.target.value })} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="category" className="block text-gray-700">Category</label>
                                        <input type="text" id="category" className="form-input mt-1 w-full p-2" value={selectedPost.Category} onChange={(e) => setSelectedPost({ ...selectedPost, Category: e.target.value })} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Amount" className="block text-gray-700">Amount</label>
                                        <input type="text" id="Amount" className="form-input mt-1 w-full p-2" value={selectedPost.Amount} onChange={(e) => setSelectedPost({ ...selectedPost, Amount: e.target.value })} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Description" className="block text-gray-700">Description</label>
                                        <input type="text" id="Description" className="form-input mt-1 w-full p-2" value={selectedPost.Description} onChange={(e) => setSelectedPost({ ...selectedPost, Title: e.target.value })} />
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Save</button>
                                    <button type="button" onClick={handleCloseModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <Button className="mt-5 w-32 bg-indigo-500" ><Link to ="/dashboard/create-supply"> Add Supply Post</Link></Button>
        </div>
        </div>
    );
};
export default Supplies;
