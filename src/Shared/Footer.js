import React from 'react';
import logo from '../Assets/logo/4.png';
import toast from 'react-hot-toast';

const Footer = () => {

  const handleSubmitMessage = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const message = form.message.value;
    toast.success('send Successfully', {
      theme: "colored",
    });
    console.log(email, message)

    form.reset();


  }

  return (

    <footer className="footer items-center p-4 bg-slate-600 text-neutral-content mt-20 rounded-t-md" id="Contact">
      <div className="items-center grid-flow-col">
        <img src={logo} alt="img" height={30} width={40} />
        <div>
          <i className='ml-1 text-lg leading-5 font-bold'>PIC COLOR</i>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </div>
      <div className='w-full'>
        <form onSubmit={handleSubmitMessage} className="w-full max-w-lg">
          <div className="form-control">

            <input type="text" name='email' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">

            <textarea className="textarea textarea-bordered mt-3" name='message' placeholder="Message" ></textarea>

          </div>
          <div className="form-control mt-3 w-full">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>


        </form>
      </div>
    </footer>
  );
};

export default Footer;