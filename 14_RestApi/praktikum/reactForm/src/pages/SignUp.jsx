import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default form submission
        const newErrors = [];
        if (name.length < 3) {
            newErrors.push('Name must be at least 3 characters long.');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.push('Please enter a valid email address.');
        }
        if (password.length < 8) {
            newErrors.push('Password must be at least 8 characters long.');
        } else if (password !== confirmPassword) {
            newErrors.push('Passwords do not match.');
        }
        setErrors(newErrors);
        if (newErrors.length === 0) {
            alert("Registrasi Akun Berhasil");
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-gray-100'>
        <div className='flex flex-col rounded-lg bg-white p-8 w-[30%] gap-2'>
            <div>   
                <h1 className='text-2xl font-bold'>Sign Up</h1>
                <p className='text-lg font-medium text-gray-500'>Nice to meet you! Enter your details to register.</p>
            </div>
            <form action="" className='flex flex-col gap-2'>
                <div className="flex flex-col">
                    <label htmlFor="" className='text-xl font-medium'>Your Name:</label>
                    <input 
                        onChange={(e) => setName(e.target.value)}
                        type="text" placeholder='Your Name' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                    {errors.includes('Name must be at least 3 characters long.') && (
                        <span className='text-red-500 text-sm'>Name must be at least 3 characters long.</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className='text-xl font-medium'>Your Email:</label>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" placeholder='Your Email' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                    {errors.includes('Please enter a valid email address.') && (
                        <span className='text-red-500 text-sm'>Please enter a valid email address.</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className='text-xl font-medium'>Your Password:</label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="text" placeholder='Your Password' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                    {errors.includes('Password must be at least 8 characters long.') && (
                        <span className='text-red-500 text-sm'>Password must be at least 8 characters long.</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className='text-xl font-medium'>Confirm Password:</label>
                    <input 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="text" placeholder='Your Password' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                    {errors.includes('Passwords do not match.') && (
                        <span className='text-red-500 text-sm'>Kata sandi tidak cocok.</span>
                    )}
                </div>
                <div className='flex gap-2'>
                    <input type="radio" id="" name="" value="" />
                    <label className='font-medium'>I agree the <a href="" className='font-bold'>Terms and Conditions</a></label>
                </div>
                <div>
                    <button to={"/"} className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full' onClick={handleClick}>
                        Sign Up
                    </button>
                </div>
                <div className='flex justify-center'>
                    <Link to={"/signin"} className='hover:underline'>
                        Already have an account? <span className='font-bold'>Sign In</span>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}
