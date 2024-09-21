import Loaing from '@compoents/Loaing';
import React, { useState } from 'react';
import RegiterUser from './RegiterUser';

const Otp = ({ email }) => {
    const [Next, setNext] = useState(false)

    const [IsLoading, setIsLoading] = useState(false)
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [errors, setErrors] = useState(['', '', '', '', '', '']);
    const [isVerified, setIsVerified] = useState(null);

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (value.length <= 1 && /^[0-9]*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            setErrors((prevErrors) => {
                const newErrors = [...prevErrors];
                newErrors[index] = ''; // Clear error for the current field
                return newErrors;
            });

            // Move to the next input if filled
            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const validateOtp = () => {
        const newErrors = ['', '', '', '', , '', ''];
        let valid = true;

        otp.forEach((digit, index) => {
            if (!digit) {
                newErrors[index] = 'This field is required';
                valid = false;
            }
        });

        setErrors(newErrors);
        return valid;
    };
    const otpString = otp.join('');

    const CheckOtp = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:5096/api/Auth/verify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        email: email,
                        otp: otpString
                    }
                ),
            });

            if (!response.ok) {
                throw new Error('Failed to verify OTP');
            }
            const data = await response.json();
            if (data.isValid) {
                setIsVerified(true);
                setIsLoading(false)
                setNext(data.isValid); // Handle response as needed
                //setNext(true)// Indicate that the OTP has been sent
            }
            setIsLoading(false);
            setIsVerified(false);
            setOtp(['', '', '', '', '', '']);
        } catch (error) {
            console.error('Error verify OTP:', error);
            setIsLoading(false);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateOtp()) {
            await CheckOtp();
        }
    };

    if (IsLoading) {
        return <Loaing />
    }

    return (
        <div>
            {Next == false && <div className="flex items-center bg-gray-100 lg:justify-center rounded-lg">
                <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div
                        className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <a href="#">K-WD</a>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            Please enter the OTP sent to your email to verify your account.
                        </p>
                    </div>
                    <div className="p-5 bg-white md:flex-1 relative">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">Verify OTP</h3>
                        <form onSubmit={handleSubmit} className="flex space-x-2">
                            {otp.map((digit, index) => (
                                <div key={index} className="flex flex-col">
                                    <input
                                        type="text"
                                        id={`otp-${index}`}
                                        value={digit}
                                        onChange={(e) => handleChange(e, index)}
                                        className={`w-12 h-12 text-center border rounded focus:outline-none focus:ring-2 ${errors[index] ? 'border-red-500' : 'border-gray-300'}`}
                                        maxLength="1"
                                    />
                                    {errors[index] && <p className="text-red-500 text-xs">{errors[index]}</p>}
                                </div>
                            ))}
                        </form>
                        <div>
                            <button
                                onClick={handleSubmit}
                                className="mt-4 w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                            >
                                Verify OTP
                            </button>
                        </div>
                        {isVerified && <p className="mt-2 text-green-500 text-sm">OTP verified successfully!</p>}
                        {isVerified == false && <p className="mt-2 text-red-500 text-sm">Invalid OTP!</p>}
                    </div>
                </div>
            </div>}
            {Next == true && <RegiterUser email={email} />}
        </div>
    );
};

export default Otp;
