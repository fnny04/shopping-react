import Shop from "../assets/shop.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-30 w-screen bg-gradient-to-r from-green-400 to-yellow-300 ">
      <div className="flex justify-center items-center gap-2 p-4">
        <img src="https://img.icons8.com/fluency/48/null/carrot.png" />
        <h1 className="text-white font-bold">VegetaMart</h1>
      </div>
      <div className="items-center justify-between p-8">
        <h1 className="text-white md:text-2xl text-l font-bold">
          Be Healthy with Cooking Fresh Vegetable
        </h1>
      </div>
      <div className="p-4 text-3xl items-center">
        <button>
          <img src={Shop} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
