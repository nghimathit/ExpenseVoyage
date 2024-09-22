import Loaing from '@compoents/Loaing';
import React, { useState } from 'react';
import ForgotPassword from './ForgotPassword';

const ForgotPassOTP = () => {
    const [Next, setNext] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({ email: '' });
    const [errors, setErrors] = useState({ email: '' });
    const [otpSent, setOtpSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    let valid = true;
    const newErrors = { email: '' };
    const validateForm = () => {

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is not valid';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const sendOtp = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:5096/api/Auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email }),
            });

            if (!response.ok) {
                const data = await response.json();
                newErrors.email = data.message;
                console.log(data.message); // Handle response as needed
                throw new Error('Failed to send OTP');
            }

            const data = await response.json();
            console.log(data); // Handle response as needed
            setOtpSent(true);
            setIsLoading(false)
            setNext(true)// Indicate that the OTP has been sent
        } catch (error) {
            console.error('Error sending OTP:', error);
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await sendOtp();
        }
    };
    if (IsLoading) {
        return <Loaing />
    }
    return (
        <div>
            {Next == false && <div className="flex items-center bg-gray-100 lg:justify-center rounded-lg">
                <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <a href="#">K-WD</a>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            Join us at K-WD and unlock the potential of your digital products with our intuitive design solutions!
                        </p>
                        <p className="mt-6 text-sm text-center text-gray-300">
                            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                        </p>
                    </div>
                    <div className="p-5 bg-white md:flex-1 relative">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">Send OTP verify email</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                            <div className="flex flex-col space-y-1">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Submit
                                </button>
                            </div>
                            {otpSent && <p className="text-green-500 text-sm">OTP has been sent to your email!</p>}
                        </form>
                    </div>
                </div>

            </div>}
            {Next == true && <ForgotPassword email={formData.email}/>}
        </div>
    );
}

export default ForgotPassOTP