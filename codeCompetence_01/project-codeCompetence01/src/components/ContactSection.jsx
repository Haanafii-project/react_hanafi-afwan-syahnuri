import contactImage from '../assets/contactimage.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ContactSection() {
    const [  contact, setContact ] = useState ([])
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");
    const [editId, setEditId] = useState(); // Variabel state untuk menyimpan ID produk yang sedang diedit 


    async function getContact () {
		// untuk mengambil data produk dari API menggunakan axios.
    const response = await axios.get("https://666db9d87a3738f7cacd277e.mockapi.io/contactUS");
        setContact(response.data);
    }

    useEffect(() => {
        getContact()
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            axios.put("https://666db9d87a3738f7cacd277e.mockapi.io/contactUS", {

                name: name,
                email: email,
                message: message,
            })
            setEditId(null)
        } else {

            axios.post ("https://666db9d87a3738f7cacd277e.mockapi.io/contactUS", {
                name: name,
                email: email,
                message: message,
            })
            setName("")
            setEmail("")
            setMessage("")
        }
        getContact()
    }

    const deleteData = (id) => {
        axios.delete("https://666db9d87a3738f7cacd277e.mockapi.io/contactUS/"+ id)
    }

    const editData = (id) => {
        const editContact = contact.find(p => p.id === id)

        setName(editContact.name)
        setEmail(editContact.email)
        setMessage(editContact.message)

        setEditId(id)
        console.log(editContact)
    }

  return (
    <div>
        <div className='flex justify-center items-center gap-12 py-32'>
            <div className=''>
                <img src={contactImage} alt="" style={{ height: '550px', width: '550px'}} className='h-auto w-auto'/>
            </div>
            <div style={{ height: '550px', width: '550px'}} className='flex flex-col gap-6 justify-center items-center'> 
                <h1 className='text-3xl font-medium py-2 text-center'>Love to Hear From You,<br />Get in touch</h1>
                <form action="" className='flex flex-col gap-2'>
                    <div className=''>
                        <label htmlFor="">Your Name:</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                    </div>
                    <div className=''>
                        <label htmlFor="">Your Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Your Email' className='w-full h-10 p-2 border-2 border-gray-300 rounded-lg'/>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">What we can help you with ?:</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' className='w-full h-20 p-2 border-2 border-gray-300 rounded-lg'></textarea>
                    </div>
                    <button className='bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded w-full' onClick={handleSubmit}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        <div className="overflow-x-auto mx-52 mb-12">
            <table className="table">
              {/* head */}
                <thead>
                    <tr className="bg-base-200 text-xl font-semibold">
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-base font-medium'>
                    {contact.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.message}</td>
                            <td>
                                <button className='btn btn-link text-red-600' onClick={() => deleteData (item.id)}>Delete</button>
                                <button className='btn btn-link text-green-600' onClick={() => editData (item.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}

                    
                </tbody>
            </table>
        </div>
    </div>



  )
}
