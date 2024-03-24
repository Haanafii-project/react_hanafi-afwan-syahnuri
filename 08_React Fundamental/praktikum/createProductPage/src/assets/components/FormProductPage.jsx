export default function FormProductPage () {
    return (
        <div>
          <div className="container mx-auto px-10 mx-10 mb-10">
            <form id="formCreateProduct">
              <h1 className="text-2xl">Detail Product</h1>
              <div className="flex flex-col py-2">
                <label htmlFor="" className="pb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="ProductName"
                  id="productName"
                  className="w-1/2 px-4 py-2 rounded-md border border-gray-300 outline-none focus:border-gray-400"
                />
                <small id="productNameError" className="error" />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="" className="pb-1">
                  Product Category
                </label>
                <select
                  className="w-1/3 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="productCategory"
                >
                  <option id="">Product Category</option>
                  <option id="gadget">Gadget</option>
                  <option id="pakaian">Pakaian</option>
                  <option id="alatTulis">Alat Tulis</option>
                </select>
              </div>
              <div className="flex flex-col py-2">
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
              <div className="flex flex-col py-2" id="productFreshness">
                <label htmlFor="">Product Freshness</label>
                <div className="flex items-center mt-1">
                  <input
                    id="brandNew"
                    type="radio"
                    defaultValue="Brand New"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  Brand New
                </div>
                <div className="flex items-center">
                  <input
                    id="New"
                    type="radio"
                    defaultValue="new"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  New
                </div>
                <div className="flex items-center">
                  <input
                    id="refurbished"
                    type="radio"
                    defaultValue="refurbished"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  Refurbished
                </div>
                <label htmlFor="description" className="pt-1">
                  Additional Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm"
                    defaultValue={"              "}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="price">Product Price :</label>
                <input
                  type="text"
                  name="ProductPrice"
                  id="productPrice"
                  placeholder="Rp 100.000"
                  className="border border-gray-300 p-2 rounded-md"
                />
                <small id="productPriceError" className="error" />
              </div>
              <div className="flex justify-center mt-2 pb-10">
                <button
                  id="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                  Submit
                </button>
              </div>
            </form>
            <div id="productTableContainer"></div>
          </div>
        </div>
    )
}