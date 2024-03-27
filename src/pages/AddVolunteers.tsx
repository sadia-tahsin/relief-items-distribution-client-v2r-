import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAddVolunteerMutation } from "../redux/features/reliefPosts/addVolunteerApi";


const AddVolunteer = () => {
    const { register, handleSubmit } = useForm();
    //const dispatch = useAppDispatch();
    const [addPost] = useAddVolunteerMutation();
    const navigate = useNavigate()
    // Define the type of your form data
    type FormData = {
       Name: string;
       Email: string;
       ContactNumber: string;
       Location: String
    };

    // Define the onSubmit function with the correct type
    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        const res = await addPost(formData);
        console.log(res);
        if('data' in res){
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "You have joined the hub!",
                showConfirmButton: false,
                timer: 1500
              });
        navigate('/about-us')
        window.location.reload();
        }
    }
    return (
        <div className="flex justify-center items-center h-screen dark:text-white">
            
        <form
            onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
            className="w-full max-w-md flex flex-col border border-gray-300 p-6 rounded-md"
        >
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="Name"
                    className="form-input mt-1 w-full p-2"
                    {...register('Name')}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    className="form-input mt-1 w-full p-2"
                    {...register('email')}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="ContactNumber" className="block text-gray-700">
                Contact Number
                </label>
                <input
                    type="text"
                    id="ContactNumber"
                    className="form-input mt-1 w-full p-2"
                    {...register('ContactNumber')}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="Location" className="block text-gray-700">
                Location
                </label>
                <input
                    type="text"
                    id="Location"
                    className="form-input mt-1 w-full p-2"
                    {...register('Location')}
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

export default AddVolunteer;