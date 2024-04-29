import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ArtsAndCraftCategoriesCard = ({category}) => {
    const { subcategory_Name, short_description, photoUrl } = category;
    return (
      <Link to={`/Painting/${subcategory_Name}`}>
        <div className="bg-[#fbe7ea] p-5 rounded-md transition hover:scale-105 hover:border-[#B81D33] hover:border-2">
          <div className=" flex items-center justify-center">
            <img className="w-20 h-24" src={photoUrl} alt="" />
          </div>
          <p className="text-center mb-2 font-bold underline decoration-black text-xl ">
            {subcategory_Name}
          </p>
          <p className="text-black">{short_description.slice(0,250)}...</p>
        </div>
      </Link>
    );
};
ArtsAndCraftCategoriesCard.propTypes = {
    category : PropTypes.object.isRequired,
}
export default ArtsAndCraftCategoriesCard;