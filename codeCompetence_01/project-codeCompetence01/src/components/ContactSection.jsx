import contactImage from '../assets/contactimage.png'
import { useState } from 'react'

export default function ContactSection() {
    const [contact, setContact] = useState ([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setContact([...contact, {name, email, message}]);
        setName("");
        setEmail("");
        setMessage("");

        console.log(contact);
    }

  return (
    <div className='flex justify-center items-center gap-12 py-32'>
        <div className=''>
            <img src={contactImage} alt="" style={{ height: '550px', width: '550px'}} className='h-auto w-auto'/>
        </div>
        <div style={{ height: '550px', width: '550px'}} className='flex flex-col gap-6 justify-center items-center'> 
            <h1 className='text-3xl font-medium py-2 text-center'>Love to Hear From You,<br />Get in touch</h1>
            <form action="" className='flex flex-col gap-2'>
                <div className=''>
                    <label htmlFor="">Your Name:</label>
                    <input type="text" placeholder='Your Name' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                </div>
                <div className=''>
                    <label htmlFor="">Your Email:</label>
                    <input type="text" placeholder='Your Email' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                </div>
                <div className='w-full'>
                    <label htmlFor="">What we can help you with ?:</label>
                    <textarea placeholder='Your Message' className='w-full h-20 p-2 border-2 border-gray-300 rounded-lg'></textarea>
                </div>
                <button className='bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded w-full' onClick={handleSubmit}>
                    Send Message
                </button>
            </form>

        </div>

    </div>
  )
}
