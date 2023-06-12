import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginIng from '../../assets/login.jpg'
import { useContext } from "react";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const SignUp = () => {
    const { CreateUserWithEmail, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.ConfirmPassword !== data.password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Password and Confirm Password didn't match!",
            })
            return
        }
        console.log(data)
        CreateUserWithEmail(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.url)
                    .then(() => {
                        const savedUser = {
                            name: data.name,
                            email: data.email,
                            image: data.url,
                            role: 'student'
                        }
                        axios.post('https://summer-children-camp-server.vercel.app/user',{savedUser})
                        reset()
                        Swal.fire(
                            'Account Create Successfully!',
                            'You clicked the button!',
                            'success'
                        )
                        navigate('/')
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })

    };
    return (
        <div>
            <div className="hero min-h-screen pt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={loginIng} alt="" />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 md:w-1/2 pt-4">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input type="url"
                                    name="url"
                                    placeholder="Photo Url" className="input input-bordered"
                                    {...register("url", { required: true })}
                                />
                                {errors.url && <span className="text-red-600">URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="Type here" className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="example@email.com" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600">email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="Enter your password" className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                />
                                {errors.password && <span className="text-red-600">Password field is required</span>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be six character .</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must one uppercase, and on lower case, and one number and special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"
                                    name="ConfirmPassword"
                                    placeholder="Enter your password" className="input input-bordered"
                                    {...register("ConfirmPassword", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                />
                                {errors.ConfirmPassword && <span className="text-red-600">Confirm Password field is required</span>}
                                {errors.ConfirmPassword?.type === 'minLength' && <p className="text-red-600">Password must be six character .</p>}
                                {errors.ConfirmPassword?.type === 'pattern' && <p className="text-red-600">Password must one uppercase, and on lower case, and one number and special character.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-yellow-400 pb-4 text-center text-xl'>Already registered? <Link to='/login'>Go to log in</Link></p>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;