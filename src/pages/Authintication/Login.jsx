import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="hero min-h-screen pt-40">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2">
                    {/* <img src={img} alt="" /> */}
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 md:w-1/2 pt-4">
                    <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                        <div className="form-control mt-6">
                            <input className="btn bg-[#D1A054] border-none" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-[#D1A054] pb-4 text-center text-xl'>Already registered? <Link to='/signup'>Go to log in</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;