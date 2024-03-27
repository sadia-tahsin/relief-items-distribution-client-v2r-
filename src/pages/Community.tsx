import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useGetCommentQuery } from "../redux/features/reliefPosts/getCommentsApi";
import { useAddCommentMutation } from "../redux/features/reliefPosts/postCommentApi";
//import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppSelector } from "../redux/features/hooks";
import img from "../assets/images/bi_arrow-left-short (1).png"
import { useState } from "react";

const Community = () => {
    type User = {
        email: string;
        iat: string;
        exp: string;
        
      };
      
    const { data } = useGetCommentQuery(undefined);
    const { register, handleSubmit } = useForm();
    const user =  useAppSelector(state => state.auth.user) as User;
    console.log(user)
    //const dispatch = useAppDispatch();
    const [addComment] = useAddCommentMutation();
   // const navigate = useNavigate()
    // Define the type of your form data
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());
    console.log( setCurrentDate);
    type FormData = {
       
       Description: String
    };
      // Define the onSubmit function with the correct type
      const onSubmit: SubmitHandler<FormData> = async (formData) => {
        if(user){
            const data = {...formData, email:user.email,  date: currentDate }
            const res = await addComment(data);
          
            if('data' in res){
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Your post has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
           // navigate('/dashboard/supplies')
            window.location.reload();
            }
        }
       
    }
    return (
        <div className="container mx-auto px-8 py-1 max-w-lg bg-white 
        border border-slate-100 rounded-lg shadow-md ">
     <form
    onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
    className="w-full flex flex-col border border-gray-300 p-6 rounded-md relative"
>
    <div className="mb-4 relative">
        <input
            type="text"
            id="description"
            className="form-input mt-1 w-full p-3 bg-gray-200 pr-10 text-black"
            placeholder="Leave a note."
            {...register('description')}
        />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8
             rounded-md bg-blue-500 flex items-center justify-center"
        >
            <img
                src={img}
                alt=""
                className="w-6 h-6"
            />
        </button>
    </div>
</form>

            <div className="my-2">
                {data &&
                    data.map((post: {_id: string, name: string, date: string, description: string}) => (
                        <div key={post._id} className="border border-gray-300 rounded-lg shadow-md my-4">
                           
                            <div className="p-6 text-yellow-400">
                                <h2 className="text-xl md:text-2xl font-bold ">{post.name}</h2>
                                <p className="text-gray-700 mb-4">{post.date}</p>
                                <p className="text-gray-700 mb-4">{post.description}</p>
                               
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Community;
