function CartList(props) {
  return (
    <div className="flex flex-row justify-between items-center w-1/2 border border-black/50 rounded-lg p-4 mx-auto">
      <li className="list-none font-semibold">{props.list.name}</li>
      <li className="list-none font-semibold">{props.list.price}</li>
      <img src={props.list.image} alt="" className="w-40 h-40 object-cover" />
    </div>
  );
}

export default CartList;
