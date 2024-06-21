import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sepatuImage from "../assets/sepatuimage.jpg"

export default function createProductPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ data, setData ] = useState([
        {
            productName:"Sepatu",
            productCategory:"alas kaki",
            productImage:{sepatuImage},
            productFreshness:"New",
            productDescription:"Sepatu warna warna biru",
            productPrice:10000,
        }
    ]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ name, setname] = useState ("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ category, setCategory] = useState ("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ freshness, setFreshness] = useState ("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ description, setDescription] = useState ("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ price, setPrice] = useState ("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ image, setImage] = useState (null);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect (()=>{
        setData(data);
    }, [data]);

    const validateName = (name) => {
        const regex = /^[a-zA-Z\s]{6,50}$/;
        return regex.test(name);
    };

    const validateCategory = (category) => {
        const regex = /^(Pakaian|Alat Tulis)$/;
        return regex.test(category);
    };

    const validateFreshness = (freshness) => {
        const regex = /^(Brand New|New|Refurbished)$/;
        return regex.test(freshness);
    };

    const validatePrice = (price) => {
        const regex = /^\d+$/;
        return regex.test(price);
    };

    const addData = (e) => {
        e.preventDefault();
        if (!validateName(name)) {
            alert("Nama produk harus terdiri dari 6-50 karakter dan hanya boleh mengandung huruf dan spasi.");
            return;
        }
        if (!validateCategory(category)) {
            alert("Kategori produk tidak valid.");
            return;
        }
        if (!validateFreshness(freshness)) {
            alert("Kondisi produk tidak valid.");
            return;
        }
        if (!validatePrice(price)) {
            alert("Harga produk harus berupa angka.");
            return;
        }
        if (name === "" || category === "" || image === "" || freshness === "" || description === "" || price === ""){
            alert("Data Tidak Boleh Kosong");
            return;
        }

        const newData = {
            productName: name,
            productCategory: category,
            productImage: URL.createObjectURL(image),
            productFreshness: freshness,
            productDescription: description,
            productPrice: price,
        }

        setData([...data, newData]);

        setname("");
        setCategory("");
        setImage(null);
        setFreshness("");
        setDescription("");
        setPrice("");

        alert("Produk Berhasil Ditambah");
    }

    const deleteData = (productName) => {
        const confirmation = window.confirm(`Anda yakin ingin menghapus produk ${productName}?`);
        if (confirmation) {
            const newData = data.filter((item) => item.productName !== productName);
            setData(newData);
        } else {
            console.log("Proses hapus produk dibatalkan");
        }
    };

    return (
        <>
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
                <Link to={"/signup"} className="bg-transparent hover:text-blue-700 text-blue-500 font-semibold py-2 px-4 rounded">
                    Sign Up
                </Link>
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
                            <input
                                type="file"
                                accept="image/*"
                                className="w-1/2 px-4 py-2 rounded-md border border-gray-300 outline-none focus:border-gray-400"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
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
                            <th>Product Image</th>
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
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <img src={item.productImage} alt={item.productName} className="w-20 h-20 object-cover" />
                                </td>
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