import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddPostMutation } from "../../redux/features/reliefPosts/addPostApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
    const { register, handleSubmit } = useForm();
    //const dispatch = useAppDispatch();
    const [addPost] = useAddPostMutation();
    const navigate = useNavigate()
    // Define the type of your form data
    type FormData = {
       Image: string;
       Category: string;
       Title: string;
       Amount: String;
       Description: String
    };

    // Define the onSubmit function with the correct type
    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        const res = await addPost(formData);
        console.log(res);
        if('data' in res){
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Your post has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        navigate('/dashboard/supplies')
        window.location.reload();
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            
        <form
            onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
            className="w-full max-w-md flex flex-col border border-gray-300 p-6 rounded-md"
        >
            <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700">
                    Image URL
                </label>
                <input
                    type="text"
                    id="image"
                    className="form-input mt-1 w-full p-2"
                    {...register('Image')}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700">
                    Category
                </label>
                <input
                    type="text"
                    id="category"
                    className="form-input mt-1 w-full p-2"
                    {...register('Category')}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="form-input mt-1 w-full p-2"
                    {...register('Title')}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700">
                    Amount
                </label>
                <input
                    type="text"
                    id="amount"
                    className="form-input mt-1 w-full p-2"
                    {...register('Amount')}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    className="form-input mt-1 w-full p-2"
                    {...register('Description')}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"
            >
                Submit
            </button>
        </form>
    </div>
);
};

export default CreatePost;