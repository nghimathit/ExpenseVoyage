import Loaing from '@compoents/Loaing';
import React, { useState } from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId ='902729761307-c9kib0ukl904i7la1s81hh1201e4ch6t.apps.googleusercontent.com';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5096/api/Auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed! Please check your credentials.');
            }

            const data = await response.json();
            // Handle successful login (e.g., store token, redirect, etc.)
            console.log('Login successful!', data);
            localStorage.setItem('user', JSON.stringify(data.data))
            console.log("DataLogin", data.data)
            // location.href="/";
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <Loaing />
    }
    const handleLoginSuccess = async (response) => {
        try {
          const decoded = jwtDecode(response.credential);
          console.log("Đăng nhập thành công:", decoded);
          // kiểm tra email đã có trong db chưa mới cho đăng ký và login
          // còn có rồi thì login không thôi
          const checkEmailGoogle = await fetch(
            "http://localhost:5096/api/Auth/check-email-exists",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: decoded.email,
              }),
            }
          );
          const checkEmailGoogleData = await checkEmailGoogle.json();
          console.log("check có hay chưa", checkEmailGoogleData.exists);
          if (checkEmailGoogleData.exists === true) {
            setError("Email already exists");
          }
          if (checkEmailGoogleData.exists === false) {
            // Đăng ký tài khoản
            const registerResponse = await fetch(
              "http://localhost:5096/api/Auth/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: decoded.name,
                  email: decoded.email,
                  password: "aaa",
                  role:"1",
                  avatar: decoded.picture,
                }),
              }
            );
    
            if (!registerResponse.ok) {
              throw new Error("Đăng ký không thành công");
            }
    
            const registerData = await registerResponse.json();
            console.log("Đăng ký thành công:", registerData);
          }
    
          //     // Đăng nhập tài khoản
          const loginResponse = await fetch(
            "http://localhost:5096/api/Auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: decoded.email,
                password: "aaa",
              }),
            }
          );
    
          if (!loginResponse.ok) {
            throw new Error("Đăng nhập không thành công");
          
          }
    
          const loginData = await loginResponse.json();
          location.href="/";
          console.log("Đăng nhập thành công:", loginData);
    
          const DataLogin = {
            Id: loginData.data.id,
            Username: loginData.data.username,
            Role: loginData.data.role,
            avatar: decoded.picture,
          };

    localStorage.setItem('user', JSON.stringify(DataLogin))
    console.log("DataLogin",DataLogin)
        
        
        } catch (error) {
          console.error("Lỗi:", error);
        }
      };
    
      const handleLoginFailure = (error) => {
        console.log("Login Failure:", error);
      };

    return (
        <div className="flex items-center bg-gray-100 lg:justify-center rounded-lg">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div
                    className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                    <div className="my-3 text-4xl font-bold tracking-wider text-center">
                        <a href="#">K-WD</a>
                    </div>
                    <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                        With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!
                    </p>
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>Don't have an account?</span>
                        <a href="/register" className="underline">Get Started!</a>
                    </p>
                    <p className="mt-6 text-sm text-center text-gray-300">
                        Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                    </p>
                </div>
                <div className="p-5 bg-white md:flex-1 relative">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 ${loading ? 'bg-gray-400' : 'bg-blue-500'} rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4`}
                            >
                                {loading ? 'Logging in...' : 'Log in'}
                            </button>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <span className="flex items-center justify-center space-x-2">
                                <span className="h-px bg-gray-400 w-14"></span>
                                <span className="font-normal text-gray-500">or login with</span>
                                <span className="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div className="flex flex-col space-y-4">
                                {/* Social login buttons go here */}
                                <a href="#" className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none">
                                    {/* Github Icon */}
                                      <GoogleOAuthProvider clientId={clientId}> 
                                    <span className="text-gray-800">
                                        <GoogleLogin
                                            onSuccess={handleLoginSuccess}
                                            onError={handleLoginFailure}
                                        /></span> 
                                             </GoogleOAuthProvider> 
                                </a>
                                <a href="#" className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none">
                                    {/* Twitter Icon */}
                                    <span className="text-blue-500">Twitter</span>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
