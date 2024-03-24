export default function NavBar () {
    return (
        <div>
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
        </div>
    )
}