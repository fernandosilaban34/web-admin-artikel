import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSignIn } from 'react-auth-kit';
import {
  faUser, faLock, faEye, faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [login, setLogin] = useState({});
  const [show, setShow] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const signIn = useSignIn();

  // const userRef = useRef();
  const errRef = useRef();

  const handleInput = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrMsg('Error loggin');
    errRef.current.focus();

    console.log(login.username);
    signIn({
      token: 'tere',
      expiresIn: 3600,
      tokenType: 'Bearer',
      authState: { username: login.username },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">LOGIN ADMIN ARTIKEL</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <label htmlFor="username" className="left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Username / Email
                      <input
                        autoComplete="off"
                        id="username"
                        name="username"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 border-2 rounded mt-2 block pl-8 "
                        placeholder="Email address"
                        onChange={handleInput}
                        required
                      />
                      <FontAwesomeIcon className="pointer-events-none w-3 h-3 absolute top-2/3 pt-3 transform -translate-y-1/2 left-3" icon={faUser} />
                    </label>
                  </div>
                  <div className="relative">
                    <label htmlFor="password" className="left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type={show ? 'password' : 'text'}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 border-2 rounded mt-2 block pl-8"
                        placeholder="Password"
                        onChange={handleInput}
                        required
                      />
                      <FontAwesomeIcon className="pointer-events-none w-3 h-3 absolute top-2/3 pt-3 transform -translate-y-1/2 left-3" icon={faLock} />
                      <FontAwesomeIcon onClick={() => setShow(!show)} className="cursor-pointer w-4 h-4 absolute pt-3 inset-y-12 right-3 transform -translate-y-1/2" icon={show ? faEyeSlash : faEye} />
                    </label>
                  </div>
                  <p ref={errRef} className={errMsg ? 'errmsg text-red-400' : 'offscreen'} aria-live="assertive">{errMsg}</p>
                  <p className="text-sm pb-3 text-blue-500 cursor-pointer">Lupa password ?</p>
                  <div className="relative">
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-2 text-sm ">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
