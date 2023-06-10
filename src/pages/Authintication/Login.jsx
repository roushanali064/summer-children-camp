import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginIng from '../../assets/login.jpg'



const Login = () => {
    
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="Enter your password" className="input input-bordered"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            {errors.password && <span className="text-red-600">Password field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-[#D1A054] pb-4 text-center text-xl'>Already registered? <Link to='/signup'>Go to Sign Up</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;