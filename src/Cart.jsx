function Cart(props){
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 w-62 hover:shadow-lg transition duration-300 my-2 mx-0.5">
        <img 
          className="w-full h-40 object-cover rounded-md mb-3" 
          src={props.resData.image_url} 
          alt={props.resData.food_name} 
        />
        <h1 className="text-lg text-center font-semibold text-gray-800 mb-1 py-0.5">
          {props.resData.restaurant_name}
        </h1>
        <p className="text-gray-700 text-center py-0.5">{props.resData.food_name}</p>
        <p className="text-gray-900 font-bold mt-2 text-center py-0.5">{props.resData.food_price}</p>
      </div>
    );
  }
  export default Cart;
  