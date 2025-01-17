import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SubcategoryCard = ({ item }) => {
  const {
    item_name,
    short_description,
    subcategory_Name,
    price,
    photoUrl,
    customization,
    rating,
    status,
    processing_time,
    _id,
  } = item;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mt-7 mb-10">
      <figure>
        <img className="w-full h-[220px]" src={photoUrl} alt={item_name} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center mb-3">
          <h2 className="w-full text-xl font-semibold">{item_name}</h2>
          <p className="text-[#B81D33] font-bold text-2xl">{price}$</p>
        </div>
        <hr />
        {short_description.length > 240 ? (
          <p className="">
            <span className="font-bold">Description:</span>
            {short_description.slice(0, 230)}...
          </p>
        ) : (
          <p>{short_description}</p>
        )}
        <p>
          <span className="font-bold">Subcategory Name:</span>{" "}
          {subcategory_Name}
        </p>
        <p>
          <span className="font-bold">Rating: </span>
          {rating}
        </p>
        <p>
          <span className="font-bold">Customization:</span>
          {customization}
        </p>
        <p>
          <span className="font-bold">Status: </span>
          {status}
        </p>
        <p>
          <span className="font-bold">Processing time: </span>
          {processing_time}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/viewdeatils/${_id}`}>
            <button className="btn bg-[#B81D33] text-white hover:text-[#B81D33] hover:bg-white font-semibold mt-2">
              View Deatils
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
SubcategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default SubcategoryCard;
