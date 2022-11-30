import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';





const Login = () => {

const [loginError,setLoginError]=useState('')
    const { login, providerLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        toast.success('login Successfully', {
            theme: "colored",
        });
        navigate(from, { replace: true })

        form.reset();

        login(email, password)
            .then(result => {
                const user = result.user;
console.log(user);

            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }


    return (
        <div className="w-full my-8" >

            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6  border ">
                    <h1 className="text-4xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>

                        </div>
                        <p className="text-red-500"> {loginError}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <button onClick={handleGoogleSignIn} variant="primary" type="submit" className='btn btn-outline'>
                            <FaGoogle />  <span className='ml-2'>Google Log In</span>
                        </button>
                        <p className='text-center'>As a new member? <Link className='text-pink-600 font-bold' to="/signup">Sign Up</Link> </p>
                    </form>

                </div>
            </div>



        </div>
    );
};

export default Login;