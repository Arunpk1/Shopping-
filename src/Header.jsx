import './App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Header() {
  const [logStatus, setLogStatus] = useState("login");
  const cart=useSelector((store)=>store.cart.items)

  return (
    <header className=" shadow-md py-4 px-6 flex items-center justify-between h-20">
  
      <img 
        className="w-36 h-20 object-cover" 
        src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" 
        alt="Logo" 
      />

  
      <nav className="flex items-center gap-6">
        <ul className="flex items-center gap-6 text-lg font-medium">
          <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-600">About</Link></li>
          <li><Link to="/cart" className="hover:text-gray-600 text:xs">Cart({cart.length})</Link></li>
        </ul>
        
        
        <button 
          onClick={() => setLogStatus(logStatus === "login" ? "logout" : "login")}
          className="bg-white border border-gray-300 px-4 py-1 rounded-md hover:text-gray-600 transition duration-200"
        >
          {logStatus}
        </button>
      </nav>
    </header>
  );
}

export default Header;

