import React, { useContext, useState} from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';





const SignUp = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const from = location.state?.from?.pathname || '/';
   
    const {createUser,providerLogin} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        form.reset();
        
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError(error.message);
            navigate(from, { replace: true});
        })
            .catch(err => {
                console.error(err)
            setError(error.message)
            });
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true});
            })
            .catch(error => {
                console.error(error)
            setError(error.message)
            })
    }

    return (
        <div className="w-full my-6">
          
                    <div className="hero-content">
              
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 border">
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
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
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <p className="text-danger"> {error}</p>
                        <button onClick={handleGoogleSignIn}  variant="primary" type="submit" className='btn btn-outline'>
        <FaGoogle/>  <span className='ml-2'>Google Log In</span>
                        </button>
                        <p className='text-center'>Already have an account? <Link className='text-pink-600 font-bold' to="/login">Login</Link> </p>
                    </form>
                   
                </div>
            </div>
                  
            
        </div>
    );
};

export default SignUp;