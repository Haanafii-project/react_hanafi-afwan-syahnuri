import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
        <div className='grid grid-cols-3 justify-items-center bg-cyan-800 text-white p-10'>
            <div>
                <h1 className='text-2xl font-semibold'>Moments</h1>
                <p>Jalan SM. Raja No. 666 <br />Medan, Sumatera Utara <br />Indonesia</p>
                <p className='pt-3'><b>Phone:</b> +62811-2233-4567 <br /> <b>Email:</b> moments@email.com</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Our Services</h1>
                <li className="py-2 list-none"><a href="" className="link link-hover my-10">Photo Studio</a></li>  
                <li className="py-2 list-none"><a href="" className="link link-hover my-10">Photo Wedding</a></li>  
                <li className="py-2 list-none"><a href="" className="link link-hover my-10">Photo Prewedding</a></li>  
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Our Social Media</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam tempora ipsam exercitationem.</p>
                <div className='py-4 grid grid-cols-4'>
                        <a href="">
                            <FaFacebook/>
                        </a>
                        <a href="">
                            <FaXTwitter/>
                        </a>
                        <a href="">
                            <FaInstagram/>
                        </a>
                </div>  
            </div>
        </div>
        <div className='flex justify-center py-5 bg-cyan-900 text-white'>
            <h1>Copyright <b>Moments</b> 2024, Made by <b>Humman</b> on earth.</h1>
        </div>
    </div>
    
  )
}
