import React from 'react'
import contactImage from '../assets/contactimage.png'

export default function ContactSection() {
  return (
    <div className='grid grid-cols-2 h-screen items-center justify-items-center'>
        <div className='pl-10'>
            <img src={contactImage} alt="" className='h-4/5 w-4/5 pl-10  '/>
        </div>
        <div className='justify-self-center'> 
            <h1 className='text-3xl font-medium py-2'>Love to Hear From You,<br />Get in touch</h1>
            <form action="">
                <div className='py-1 w-96'>
                    <label htmlFor="">Your Name:</label>
                    <input type="text" placeholder='Your Name' className='w-11/12 h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                </div>
                <div className='py-1 w-96'>
                    <label htmlFor="">Your Email:</label>
                    <input type="text" placeholder='Your Email' className='w-11/12 h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                </div>
                <div className='py-1 w-96'>
                    <label htmlFor="">What we can help you with ?:</label>
                    <textarea placeholder='Your Message' className='w-11/12 h-20 p-2 border-2 border-gray-300 rounded-lg'></textarea>
                </div>
                <button className='bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded w-11/12'>
                    Send Message
                </button>
            </form>

        </div>

    </div>
  )
}
