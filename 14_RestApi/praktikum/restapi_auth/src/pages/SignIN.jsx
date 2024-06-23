import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleLogin = (event) => {
        event.preventDefault();
        const newErrors = [];
        const dummyUser = {email: 'admin@email.com', password: 'ganteng123'};
        const user = JSON.parse(localStorage.getItem('user'));
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.push('Please enter a valid email address.');
        }
        if (password.length < 8) {
            newErrors.push('Password must be at least 8 characters long.');
        }
        setErrors(newErrors);
        if (newErrors.length === 0) {
            alert("Login Berhasil");
            setEmail('');
            setPassword('');
        }
        if (user && user.username === email && user.password === password) {
            localStorage.setItem('isLoggedIn', true);
            window.location.reload();
        } else if (email === dummyUser.email && password === dummyUser.password) {
            localStorage.setItem('user', JSON.stringify(dummyUser));
            localStorage.setItem('isLoggedIn', true);
            window.location.href = "/"
        } else {
            setErrors('Invalid username or password');
        }
    };
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-gray-100'>
        <div className='flex flex-col rounded-lg bg-white p-8 w-[30%] gap-2'>
            <div>   
                <h1 className='text-2xl font-bold'>Sign In</h1>
                <p className='text-lg font-medium text-gray-500'>Hello there, Nice to meet you!</p>
            </div>
            <form action="" className='flex flex-col gap-2'>
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
                        type="password" placeholder='Your Password' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                    {errors.includes('Password must be at least 8 characters long.') && (
                        <span className='text-red-500 text-sm'>Password must be at least 8 characters long.</span>
                    )}
                </div>
                <div>
                    <button to={"/"} className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full' onClick={handleLogin}>
                        Sign In
                    </button>
                </div>
                <div className='flex justify-center'>
                    <Link to={"/signup"} className='hover:underline'>
                        Not have an account? <span className='font-bold'>Sign Up</span>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}
