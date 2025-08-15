import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Appstore";

function Accordion({ accordiandata }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleAddItem = (list) => {
    dispatch(addItem(list));
  };

  return (
    <div className="rounded-md shadow-sm mb-4 w-1/2">
      <div
        onClick={() => setVisible(!visible)}
        className="cursor-pointer bg-white px-4 py-2 font-semibold text-gray-900"
      >
        {accordiandata.heading}
      </div>

      {visible && (
        <div className="px-4 py-2 bg-white">
          <div className="space-y-3">
            {accordiandata.options.map((list, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="font-bold">{list.name}</div>
                <div className="relative">
                  <img
                    src={list.image}
                    alt="image"
                    className="w-40 h-40 object-cover"
                  />
                  <button
                    className="absolute bottom-1 right-1 bg-black text-white px-2 py-1 text-sm rounded-sm"
                    onClick={() => handleAddItem(list)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
