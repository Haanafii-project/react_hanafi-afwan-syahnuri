import React from "react";
import { useEffect, useState } from "react";

export default function createProductPage() {
    const [wellcomeAllert, setWellcomeAlert] = useState (true)
    const [ data, setData ] = useState([
        {
            productName:"Sepatu",
            productCategory:"alas kaki",
            productFreshness:"New",
            productDescription:"Sepatu warna warna biru",
            productPrice:10000,
        }
    ]);

    const [ name, setname] = useState ("");
    const [ category, setCategory] = useState ("");
    const [ freshness, setFreshness] = useState ("");
    const [ description, setDescription] = useState ("");
    const [ price, setPrice] = useState ("");

    useEffect (()=>{
        setData(data);
    }, [data]);

    useEffect (() => {
        setTimeout(() => setWellcomeAlert(false), 3000);
    }, []);

    const addData = (e) => {
        e.preventDefault();
        if (name === "" || category === "" || freshness === "" || description === "" || price === ""){
            alert("Data Tidak Boleh Kosong");
            return;
        }

        const newData = {
            productName: name,
            productCategory: category,
            productFreshness: freshness,
            productDescription: description,
            productPrice: price,
        }

        setData([...data, newData]);

        setname("");
        setCategory("");
        setFreshness("");
        setDescription("");
        setPrice("");

        console.log("Product telah ditambah")
    }

    const deleteData = (productName) => {
        const newData = data.filter((item) => item.productName !== productName)

        setData(newData);
        console.log("Product telah dihapus")
    }

    return (
        <>
        <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 z-50" role="alert" hidden={!wellcomeAllert}>
            <p className="font-bold text-center">WELLCOME</p>
        </div>
        <header className="bg-white flex justify-between items-center p-4 shadow">
            <div>
                <h1 className="text-3xl">Simple header</h1>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Home
                </button>
                <button className="bg-transparent hover:text-blue-700 text-blue-500 font-semibold py-2 px-4 rounded">
                    Features
                </button>
                <button className="bg-transparent hover:text-blue-700 text-blue-500 font-semibold py-2 px-4 rounded">
                    Pricing
                </button>
                <button className="bg-transparent hover:text-blue-700 text-blue-500 font-semibold py-2 px-4 rounded">
                    FAQs
                </button>
                <button className="bg-transparent hover:text-blue-700 text-blue-500 font-semibold py-2 px-4 rounded">
                Pricing
                </button>
            </div>
        </header>
        <div className="container mx-auto">
            <div className="flex justify-center mt-4">
                <img src="./Tailwind_CSS_Logo.svg.png" alt="" />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl py-4">Create Product</h1>

                <p className="pb-4 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quidem
                    ipsum facere alias itaque animi dicta natus. Eos quasi sed corporis ex
                    voluptas commodi assumenda maxime maiores ab culpa reiciendis dicta
                    numquam a molestiae nesciunt placeat necessitatibus cum, ullam delectus
                    ad praesentium, provident vel! Sed rem nemo consequuntur natus incidunt?
                </p>
            </div>
            <div className="px-10 mx-10 mb-10">
                <form>
                    <h1 className="text-2xl">Detail Product</h1>
                    <div className="flex flex-col py-2">
                        <label htmlFor="" className="pb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="ProductName"
                            value={name}
                            minLength={6}
                            maxLength={50}
                            className="w-1/2 px-4 py-2 rounded-md border border-gray-300 outline-none focus:border-gray-400"
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col pt-2">
                        <label htmlFor="" className="pb-1">
                            Product Category
                        </label>
                        <select 
                            className="w-1/3 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-state" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Select Category Product</option>
                                <option value="Pakaian">Pakaian</option>
                                <option value="Alat Tulis">Alat Tulis</option>
                        </select>
                    </div>
                    <div className="flex flex-col pt-2">
                        <label htmlFor="" className="pb-1">
                            Image of Product
                        </label>
                        <div className="flex py-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Choose File
                            </button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                No File Choosen
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col pt-2">
                        <label htmlFor="" className="pb-1">Product Freshness</label>
                        <select
                            className="w-1/3 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                            value={freshness}
                            onChange={(e) => setFreshness(e.target.value)}
                            >
                            <option value="">Select Product Frehness</option>
                            <option value="Brand New">Brand New</option>
                            <option value="New">New</option>
                            <option value="Refurbished">Refurbished</option>
                        </select>
                        <label htmlFor="description" className="pt-2">
                            Additional Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label htmlFor="price">Product Price :</label>
                        <input
                            type="number"
                            name="ProductPrice"
                            id="product-price"
                            placeholder="Rp 100.000"
                            className="border border-gray-300 p-2 rounded-md"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center mt-2">
                        <button
                            id="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                            onClick={addData}
                            >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <h1 className="text-3xl text-center mb-4">Daftar Product</h1>
            <div className="overflow-x-auto px-24 mb-10">
                <table className="table border border-stone-600">
                    <thead>
                        <tr className="bg-base-200">
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Product Freshness</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.productName}>
                                <td>{item.productName}</td>
                                <td>{item.productCategory}</td>
                                <td>{item.productFreshness}</td>
                                <td>{item.productDescription}</td>
                                <td>{item.productPrice}</td>
                                <td>
                                    <button className="btn-link text-red-600" onClick={()=> deleteData (item.productName)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}