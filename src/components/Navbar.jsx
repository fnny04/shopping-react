import { useState } from "react";
import Shop from "../assets/shop.png";
import Counter from "./Counter";

const Navbar = ({ totalItem }) => {
  const [showModal, setShowModals] = useState(false);

  return (
    <nav className="flex justify-between h-30 w-full bg-gradient-to-r from-green-400 to-yellow-300 ">
      <div className="flex justify-center items-center gap-2 p-4">
        <img src="https://img.icons8.com/fluency/48/null/carrot.png" />
        <h1 className="text-white font-bold">VegetaMart</h1>
      </div>
      <div className="items-center justify-between p-8">
        <h1 className="text-white md:text-3xl text-l ">
          Be Healthy with Cooking Fresh Vegetable
        </h1>
      </div>
      <div className="p-4 text-3xl items-center">
        {totalItem > 0 && (
          <p className="flex w-5 h-5 items-center justify-center bg-red-500 text-white text-sm rounded-full ">
            {totalItem}
          </p>
        )}

        <button onClick={() => setShowModals(true)}>
          <img src={Shop} alt="" />
        </button>

        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">Shopping Cart</h3>
                  </div>
                  <div className="flex gap-4 py-4">
                    <Counter />
                  </div>

                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModals(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModals(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
