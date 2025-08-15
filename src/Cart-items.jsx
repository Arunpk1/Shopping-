import Cart from "./Cart";
import { useState } from "react";
import {Link} from "react-router-dom";
import Toprated from "./Toprated";


function Cartitems() {
  const items = [
    {
      "id": 1,
      "restaurant_name": "Pasta Paradise",
      "food_name": "Spaghetti Carbonara",
      "image_url": "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_hybrid",
      "food_price": "$12.99",
      "topRated": false
    },
    {
      "id": 2,
      "restaurant_name": "Sushi Delight",
      "food_name": "California Roll",
      "image_url": "https://t4.ftcdn.net/jpg/01/35/23/71/360_F_135237184_vZnNVRuaHQZclXjxJ7ftEa3IyerhDF2y.jpg",
      "food_price": "$18.50",
      "topRated": true
    },
    {
      "id": 3,
      "restaurant_name": "Burger Haven",
      "food_name": "Cheeseburger",
      "image_url": "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
      "food_price": "$10.75",
      "topRated": false
    },
    {
      "id": 4,
      "restaurant_name": "Vegan Vibes",
      "food_name": "Tofu Stir Fry",
      "image_url": "https://iheartvegetables.com/wp-content/uploads/2023/12/Exclusive-Cashew-Tofu-and-Vegetable-Stir-Fry-4364-Large.jpeg",
      "food_price": "$14.99",
      "topRated": false
    },
    {
      "id": 5,
      "restaurant_name": "Taco Fiesta",
      "food_name": "Beef Tacos",
      "image_url": "https://www.thefoodinmybeard.com/content/taco/whitepeople/wpt10.jpg",
      "food_price": "$9.50",
      "topRated": false
    },
    {
      "id": 6,
      "restaurant_name": "Pizza Palace",
      "food_name": "Margherita Pizza",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQkn9wYIhnym59AZ-4rdRelW6xfPh4Yuxiw&s",
      "food_price": "$15.00",
      "topRated": false
    },
    {
      "id": 7,
      "restaurant_name": "Noodle Nirvana",
      "food_name": "Ramen",
      "image_url": "https://www.kikkoman.eu/fileadmin/_processed_/f/0/csm_1103-recipe-page-Spicy-Kimchi-Ramen-with-Pork_desktop_c8dc4e51e8.jpg",
      "food_price": "$13.50",
      "topRated": false
    },
    {
      "id": 8,
      "restaurant_name": "Steakhouse Supreme",
      "food_name": "Ribeye Steak",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu0x8iJtxY2GhpAg8pts3iOWRcTjzDZQ8OA&s",
      "food_price": "$24.99",
      "topRated": true
    },
    {
      "id": 9,
      "restaurant_name": "Dim Sum Dynasty",
      "food_name": "Dumplings",
      "image_url": "https://hungryinthailand.com/wp-content/uploads/2024/02/steamed-garlic-chive-dumplings.webp",
      "food_price": "$8.99",
      "topRated": false
    },
    {
      "id": 10,
      "restaurant_name": "Grill Master",
      "food_name": "BBQ Ribs",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62XUenLw26AsGLVqgJc7fs9hdUxoBbq_F-Q&s",
      "food_price": "$19.75",
      "topRated": false
    },
    {
      "id": 11,
      "restaurant_name": "Curry Corner",
      "food_name": "Chicken Tikka Masala",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18QaUxW5z9PyN99Wvje6VVHbKpjcG2Ijl5w&s",
      "food_price": "$16.00",
      "topRated": false
    },
    {
      "id": 12,
      "restaurant_name": "Dosa Corner",
      "food_name": "Masala Dosa",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s",
      "food_price": "$20.00",
      "topRated": false
    }
  ]
  

  const [reslist, setReslist] = useState(items);
  const [searchValue, setSearchValue] = useState("");
  const TopRatedCart = Toprated(Cart);
  

  const handleSearch = () => {
    const filteredItems = items.filter((restaurant) =>
      restaurant.restaurant_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setReslist(filteredItems);
  };

  return (
    <div className="flex flex-wrap gap-x-0.5 items-center justify-center mt-2">
      <div className="flex justify-center items-center mb-8">
  <div className="flex gap-2 py-1">
    <input
      type="text"
      placeholder="Search by restaurant name..."
      className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-400"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
</div>

      <div className="flex flex-wrap gap-x-0.5 items-center justify-center">
        {reslist.map((restaurant) => (
          <Link to={`/restuarants/${restaurant.id}`}>{restaurant.topRated ? <TopRatedCart key={restaurant.id} resData={restaurant}/>:
            <Cart key={restaurant.restaurant_name} resData={restaurant} />}</Link>
        ))}
      </div>
    </div>
  );
}

export default Cartitems;
