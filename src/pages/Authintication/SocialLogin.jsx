import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/"

    const handleGoogleLogin=()=>{
        googleLogin()
            .then(() => {
                Swal.fire(
                    'Login Successfully!',
                    'You clicked the button!',
                    'success'
                )
                navigate(form, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div>
            <div className="divider">OR Sign Up With</div>
            <div className="flex justify-center items-center gap-6 py-4">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline text-2xl">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;