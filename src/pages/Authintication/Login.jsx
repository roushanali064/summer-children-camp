import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginIng from '../../assets/login.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";



const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [show, SetShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/"

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        loginUser(data.email, data.password)
            .then(() => {
                Swal.fire(
                    'Login Successfully!',
                    'You clicked the button!',
                    'success'
                )
                reset()
                navigate(form, { replace: true });
            })
            .catch(err => {
                console.error(err.message)
            })
    };
    return (
        <div className="hero min-h-screen pt-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center  md:w-1/2">
                    <img src={loginIng} alt="" />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 md:w-1/2  pt-4">
                    <h1 className="text-4xl font-bold text-center">Login !</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="example@email.com" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">email field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password" className="input input-bordered "
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            {errors.password && <span className="text-red-600">Password field is required</span>}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <button onClick={() => SetShow(!show)} className="absolute right-10 top-[230px] text-xl">
                        {show ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <p className='text-[#D1A054] pb-4 text-center text-xl'>Already registered? <Link to='/signup'>Go to Sign Up</Link></p>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Login;