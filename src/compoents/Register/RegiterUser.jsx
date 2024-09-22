import Loaing from '@compoents/Loaing';
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom'; 


const RegisterUser = ({ email }) => {
    //const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState(''); // State for API error

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
        setApiError(''); // Clear API error on change
    };

    const validateForm = () => {
        const newErrors = {};
        let valid = true;

        
        if (!formData.name) {
            newErrors.name = 'Full name is required';
            valid = false;
        }

      
        if (!formData.password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

       
        if (!formData.terms) {
            newErrors.terms = 'You must agree to the terms';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const registerUser = async () => {
        try {
            const response = await fetch('http://localhost:5096/api/Auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: email,
                    password: formData.password,
                    role: "1",
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to register user');
            }
    
            const data = await response.json();
            console.log(data); // Handle response as needed
            location.href="/login";
    
        } catch (error) {
            console.error('Error sending request:', error);
            setApiError('Registration failed. Please try again.'); // Set error message
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Validate before proceeding

        setIsLoading(true);
        await registerUser();
        setIsLoading(false);

        // Reset form after successful submission
        setFormData({
            name: '',
            password: '',
            confirmPassword: '',
            terms: false,
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="flex items-center bg-gray-100 lg:justify-center rounded-lg">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                    <div className="my-3 text-4xl font-bold tracking-wider text-center">
                        <a href="#">K-WD</a>
                    </div>
                    <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                        Join us at K-WD and unlock the potential of your digital products with our intuitive design solutions!
                    </p>
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>Already have an account?</span>
                        <a href="/login" className="underline">Log In</a>
                    </p>
                    <p className="mt-6 text-sm text-center text-gray-300">
                        Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                    </p>
                </div>
                <div className="p-5 bg-white md:flex-1 relative">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Create Account</h3>
                    {apiError && <p className="text-red-500 text-sm">{apiError}</p>} {/* Display API error */}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-500">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                            <input
                                type="password"
                                id="password"const
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-500">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label htmlFor="terms" className="text-sm font-semibold text-gray-500">I agree to the terms</label>
                        </div>
                        {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterUser;
