import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./Counterslice";
import { Link } from "react-router-dom";
import imgA from "../img/imgA.jpg";
import imgB from "../img/imgB.jpg";
import imgC from "../img/imgC.jpg";
import imgD from "../img/imgD.jpg";
import imgE from "../img/imgE.jpg";

export const Shoekart = () => {
  const products = [
    { id: 1, name: "Nike Air Max 270", price: 329.99, description: "Sleek and stylish running shoes with superior cushioning." },
    { id: 2, name: "Puma RS-X Reinvent", price: 69.99, description: "Trendy sneakers with bold design and comfort." },
    { id: 3, name: "Adidas Samba Classic", price: 1049.99, description: "Iconic indoor soccer shoes with timeless style." },
    { id: 4, name: "New Balance 574 Core", price: 159.99, description: "Classic trainers perfect for casual everyday wear." },
    { id: 5, name: "Air Jordan 1 Retro High", price: 44.99, description: "Legendary basketball shoes with unmatched style and heritage." }
];
  const images = [imgA, imgB, imgC, imgD, imgE];

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.counter.data);

  const handleAddToCart = (product) => {
    dispatch(addData({ id: product.id, name: product.name, price: product.price }));
    alert(`Added ${product.name} to cart successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center py-4 bg-slate-600 px-6 rounded-md">
        <div className="flex items-center">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Shoekart Logo"
            className="w-40"
          />
        </div>
        <input
          type="text"
          placeholder="Search for branded shoes"
          className="flex-grow max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className="flex items-center space-x-6 text-white">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/cart" className="hover:underline">
            Cart ({cart.length})
          </Link>
          <Link to="/seller" className="hover:underline">Become a Seller</Link>
          <Link to="/more" className="hover:underline">More</Link>
        </div>
      </header>

      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={images[index] || "https://via.placeholder.com/300"}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-blue-700">
                ${product.price.toFixed(2)}
              </span>
              <button
                className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() => handleAddToCart(product)}
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shoekart;
