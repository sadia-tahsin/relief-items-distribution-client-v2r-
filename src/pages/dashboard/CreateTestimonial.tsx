import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAddTestimonialMutation } from "../../redux/features/reliefPosts/addTestimonialApi";
import { useAppSelector } from "../../redux/features/hooks";


const CreateTestimonial = () => {
    type User = {
        email: string;
        iat: string;
        exp: string;
        
      };
    const user =  useAppSelector(state => state.auth.user) as User;
    console.log(user)
    const { register, handleSubmit } = useForm();
    const [addTestimonial] = useAddTestimonialMutation();
    const navigate = useNavigate()
    // Define the type of your form data
    type FormData = {
       Description: String
    };

    // Define the onSubmit function with the correct type
    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        if(user){
            const data = {...formData, email:user.email }
           
          
        const res = await addTestimonial(data);
        console.log(res);
        if('data' in res){
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Your testimonial has been saved",
                showConfirmButton: false,
                timer: 1500
              });
         navigate('/dashboard')
        window.location.reload();}
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            
        <form
            onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
            className="w-full max-w-md flex flex-col border border-gray-300 p-6 rounded-md"
        >
             <div className="mb-6">
                
                <input
                    type="text"
                    id="description"
                    className="form-input mt-1 w-full p-2"
                    placeholder="Leave a note..."
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

export default CreateTestimonial;