import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/features/hooks";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";
//import { setUser } from "../redux/features/auth/authSlice";

const Register = () => {
    //const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    //const dispatch = useAppDispatch();
    const [registerUser] = useRegisterMutation();

    // Define the type of your form data
    type FormData = {
        name: string;
        email: string;
        password: string;
    };

    // Define the onSubmit function with the correct type
    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        const res = await registerUser(formData);
        console.log(res);
        // if ('data' in res) {
        //     // Handle success
        //     const user = verifyToken(res.data.token);
        //     dispatch(setUser({ user: user, token: res.data.token }));
        //     navigate('/');
        // } else {
        //     // Handle error
        //     console.error('Error occurred:', res.error);
        // }
       
    }
    return (
                <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)} className="w-full max-w-md flex flex-col border border-gray-300 p-6 rounded-md">
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">User name</label>
                <input type="text" id="name" className="form-input mt-1 w-full p-2" {...register('name')} />
            </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="text" id="email" className="form-input mt-1 w-full p-2" {...register('email')} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="text" id="password" className="form-input mt-1 w-full p-2" {...register('password')} />
                    </div>
                    <Button htmlType="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">
                        Submit
                    </Button>
                </form>
            </div>
    );
};

export default Register;