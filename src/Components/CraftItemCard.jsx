import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const CraftItemCard = ({ item }) => {
  const { _id, item_name, subcategory_Name, price, photoUrl, rating, status } =
    item;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl mt-7">
        <figure>
          <img className="w-full h-[250px]" src={photoUrl} alt={item_name} />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between mb-2">
            <h2 className="w-full text-xl font-semibold">{item_name}</h2>
            <p className="pr-4 font-bold text-xl text-[#B81D33]">${price}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500 font-medium flex items-center gap-1 mb-2">
              {subcategory_Name}
            </p>
            <p className="text-gray-500 font-medium flex items-center gap-1 mb-2">
              Rating: {rating}
            </p>
            <button className="bg-[#fbe7ea] py-1 px-2 rounded-md text-black font-medium">
              {status}
            </button>
          </div>
          <div className="">
            <Link to={`/viewdeatils/${_id}`}>
              <button className="w-full btn bg-[#B81D33] text-white font-semibold mt-2">
                View Deatils
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CraftItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CraftItemCard;
